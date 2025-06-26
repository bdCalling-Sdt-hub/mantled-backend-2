import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { getUserDataFromRequest } from '../../../../helpers/getUserDataFromRequest.helper';
import { checkIsSubscribed } from '../../../../helpers_v2/subscription/checkSubscriptionWithUserId.helper';

export const checkIfSubscribedController = myControllerHandler(
  async (req, res) => {
    const userData: any = await getUserDataFromRequest(req);
    if (!userData) {
      throw new Error('auth token is not valid');
    }
    const isSubscribed = await checkIsSubscribed(userData.id);
    const myResponse = {
      message: 'Review Given Successfully',
      success: true,
      isSubscribed,
    };
    res.status(StatusCodes.OK).json(myResponse);
  }
);
