import { userModelOfMantled } from '../app/modules/auth_v2/model/userModelOfMantled.model';
import { jwtSecretKey } from '../data/environmentVariables';
import { getAndParseJwtTokenFromHeader } from './getAndParseBearerTokenFromHeader';

export const getUserDataFromRequest = (req: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const authData = await getAndParseJwtTokenFromHeader(req, jwtSecretKey);
      const { email } = authData;
      const userData = await userModelOfMantled.findOne({ email });
      if (!userData) {
        throw new Error('USER_DOES_NOT_EXISTS');
      }
      resolve(userData);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
