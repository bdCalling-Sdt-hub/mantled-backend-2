import express from 'express';

import { signUpController } from '../controller/signUp.controller';
import { verifyOtpController } from '../controller/verifyOtp.controller';
import { signInController } from '../controller/signIn.controller';
import { completeProfile1Controller } from '../controller/completeProfile1.controller';
import { completeProfile2Controller } from '../controller/completeProfile2.controller';
import { addVaultPasswordController } from '../controller/addVaultPassword.controller';
import { forgotPasswordController } from '../controller/forgotPassword.controller';
import { verifyOtpOfForgotPasswordController } from '../controller/verifyOtpOfForgotPassword.controller';
import { changePasswordController } from '../controller/changePassword.controller';
import { vaultSignInController } from '../controller/vaultSignIn.controller';
import { updateProfileController } from '../controller/updateProfile.controller';
import { updateVaultPasswordController } from '../controller/updateVaultPassword.controller';
import { changePasswordInSettingsController } from '../controller/changePasswordInSettings.controller';
import { updateSingleAuthCardController } from '../controller/updateSingleAuthCard.controller';
import { forgotVaultPasswordController } from '../controller/forgotVaultPassword.controller';
import { secondPhaseOfForgotVaultPasswordController } from '../controller/secondPhaseOfForgotVaultPassword.controller';
import { signInWithGoogleController } from '../controller/googleSignIn.controller';
import { signInWithMicrosoftController } from '../controller/signInWithMicrosoft.controller';
import { fingerPrintVerificationController } from '../../../vault/controller/fingerprintVerification.controller';

const myRouter = express.Router();

myRouter.post('/sign-up', signUpController);
myRouter.post('/verify-otp', verifyOtpController);
myRouter.post('/sign-in', signInController);
myRouter.post('/complete-profile-1', completeProfile1Controller);
myRouter.post('/complete-profile-2', completeProfile2Controller);
myRouter.post('/update-single-auth-card', updateSingleAuthCardController);
myRouter.post('/add-vault-password', addVaultPasswordController);
myRouter.post('/forgot-password', forgotPasswordController);
myRouter.post('/forgot-vault-password', forgotVaultPasswordController);
myRouter.post(
  '/second-phase-of-forgot-vault-password',
  secondPhaseOfForgotVaultPasswordController
);

myRouter.post(
  '/verify-forgot-password-otp',
  verifyOtpOfForgotPasswordController
);
myRouter.post('/reset-password', changePasswordController);
myRouter.post('/change-password', changePasswordInSettingsController);
myRouter.post('/vault/sign-in', vaultSignInController);
myRouter.post(
  '/vault/fingerprint-verification',
  fingerPrintVerificationController
);
myRouter.post('/update-profile', updateProfileController);
myRouter.post('/update-vault-password', updateVaultPasswordController);
myRouter.post('/sign-in-with-google', signInWithGoogleController);
myRouter.post('/sign-in-with-microsoft', signInWithMicrosoftController);

export const dunmacAuthRouter = myRouter;
