import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import sendResponse, { sendResponse2 } from '../../../../shared/sendResponse';
import { userModelOfMantled } from '../model/userModelOfMantled.model';
import { checkMyPassword } from '../../../../helpers/passwordHashing';
import { giveAuthenticationToken } from '../../../../helpers/jwtAR7';
import { jwtSecretKey } from '../../../../data/environmentVariables';
import {
  checkIsBanned,
  checkIsBanned2,
} from '../../../../helpers_v2/auth/checkIsBanned.helper';
import { checkIsSubscribed } from '../../../../helpers_v2/subscription/checkSubscriptionWithUserId.helper';

const sendResponseFinal: any = sendResponse2;
export const signInController: any = myControllerHandler(async (req, res) => {
  await checkIsBanned2(req);

  const { email, password } = req.body;

  if (!email || !password) {
    return sendResponse(res, {
      code: StatusCodes.BAD_REQUEST,
      message: 'Email and password are required',
      data: {},
    });
  }

  const userData = await userModelOfMantled.findOne({ email });
  if (!userData) {
    return sendResponse(res, {
      code: StatusCodes.UNAUTHORIZED,
      message: 'Invalid email or password',
      data: {},
    });
  }
  const userData2 = userData.toObject();
  const { passwordHash } = userData;

  const isPasswordValid = await checkMyPassword(password, passwordHash);
  if (!isPasswordValid) {
    return sendResponse(res, {
      code: StatusCodes.UNAUTHORIZED,
      message: 'Invalid email or password',
      data: {},
    });
  }

  const jwtToken = await giveAuthenticationToken(email, jwtSecretKey);
  const bearerToken = `Bearer ${jwtToken}`;
  // wipe password hash
  userData2.passwordHash = '';
  const isSubscribed = await checkIsSubscribed(userData2.id);

  // return sendResponseFinal(res, {
  //   code: StatusCodes.OK,
  //   message: 'Signed in successfully',
  //   data: userData2,
  //   token: bearerToken,
  //   isSubscribed,
  // });
  return res.status(200).json({
    data: userData2,
    token: bearerToken,
    statusCode: 200,
    message: 'Signed in successfully',
    success: true,
    isSubscribed,
  });
});
