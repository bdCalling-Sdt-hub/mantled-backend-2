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
import { fingerPrintVerificationController } from '../../vault/controller/fingerprintVerification.controller';
import { updateSingleAuthCardController } from '../controller/updateSingleAuthCard.controller';
import { forgotVaultPasswordController } from '../controller/forgotVaultPassword.controller';
import { secondPhaseOfForgotVaultPasswordController } from '../controller/secondPhaseOfForgotVaultPassword.controller';
import { signInWithGoogleController } from '../controller/googleSignIn.controller';
import { signInWithMicrosoftController } from '../controller/signInWithMicrosoft.controller';

const authV2Router = express.Router();

authV2Router.post('/sign-up', signUpController);
authV2Router.post('/verify-otp', verifyOtpController);
authV2Router.post('/sign-in', signInController);
authV2Router.post('/complete-profile-1', completeProfile1Controller);
authV2Router.post('/complete-profile-2', completeProfile2Controller);
authV2Router.post('/update-single-auth-card', updateSingleAuthCardController);
authV2Router.post('/add-vault-password', addVaultPasswordController);
authV2Router.post('/forgot-password', forgotPasswordController);
authV2Router.post('/forgot-vault-password', forgotVaultPasswordController);
authV2Router.post(
  '/second-phase-of-forgot-vault-password',
  secondPhaseOfForgotVaultPasswordController
);

authV2Router.post(
  '/verify-forgot-password-otp',
  verifyOtpOfForgotPasswordController
);
authV2Router.post('/reset-password', changePasswordController);
authV2Router.post('/change-password', changePasswordInSettingsController);
authV2Router.post('/vault/sign-in', vaultSignInController);
authV2Router.post(
  '/vault/fingerprint-verification',
  fingerPrintVerificationController
);
authV2Router.post('/update-profile', updateProfileController);
authV2Router.post('/update-vault-password', updateVaultPasswordController);
authV2Router.post('/sign-in-with-google', signInWithGoogleController);
authV2Router.post('/sign-in-with-microsoft', signInWithMicrosoftController);

export { authV2Router };
