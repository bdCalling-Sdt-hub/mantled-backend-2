import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URL_MANTLED = process.env.MONGODB_URL_MANTLED;
const JWT_SECRET_KEY_MANTLED = process.env.JWT_SECRET_KEY_MANTLED;
const JWT_SECRET_KEY_VAULT_MANTLED = process.env.JWT_SECRET_KEY_VAULT_MANTLED;
const ADMIN_CHANGE_PASSWORD_JWT_SECRET_KEY_MANTLED =
  process.env.ADMIN_CHANGE_PASSWORD_JWT_SECRET_KEY_MANTLED;
const SECRET_KEY_OF_CHANGING_PASSWORD_TOKEN_MANTLED =
  process.env.SECRET_KEY_OF_CHANGING_PASSWORD_TOKEN_MANTLED;
const FRONTEND_ADDRESS_MANTLED = process.env.FRONTEND_ADDRESS_MANTLED;
const PORT_MANTLED = process.env.PORT_MANTLED;
const STRIPE_PUBLISHABLE_KEY_MANTLED =
  process.env.STRIPE_PUBLISHABLE_KEY_MANTLED;
const STRIPE_SECRET_KEY_MANTLED = process.env.STRIPE_SECRET_KEY_MANTLED;
const RAW_ENCRYPTION_KEY_MANTLED = process.env.RAW_ENCRYPTION_KEY_MANTLED;
const CHAT_GPT_API_KEY = process.env.CHAT_GPT_API_KEY;
const {
  NODEMAILER_SERVICE_MANTLED,
  NODEMAILER_USER_MANTLED,
  NODEMAILER_PASSWORD_MANTLED,
} = process.env;

export const chatGptApiKey = CHAT_GPT_API_KEY;

export const databaseUrlOfWeatherConsumerReport = `mongodb+srv://ar7:12345@cluster0.1g8wuka.mongodb.net/weather_consumer_report?retryWrites=true&w=majority`;
const onlineDatabase1 = `mongodb+srv://ar7:12345@cluster0.1g8wuka.mongodb.net/mantled?retryWrites=true&w=majority`;

let onlineDatabase2 =
  'mongodb://localhost:27017/mantled?retryWrites=true&w=majority';
if (MONGODB_URL_MANTLED) {
  onlineDatabase2 = MONGODB_URL_MANTLED;
}

export const databaseUrlOfMantled = onlineDatabase2;

let jwtSecretKey_ = 'mantled_nexus';
if (JWT_SECRET_KEY_MANTLED) {
  jwtSecretKey_ = JWT_SECRET_KEY_MANTLED;
}
export const jwtSecretKey = jwtSecretKey_;

let jwtSecretKeyOfVault_ = 'mantled_nexus_vault';
if (JWT_SECRET_KEY_VAULT_MANTLED) {
  jwtSecretKeyOfVault_ = JWT_SECRET_KEY_VAULT_MANTLED;
}
export const jwtSecretKeyOfVault = jwtSecretKeyOfVault_;

let adminChangingPasswordJwtSecretKey_ =
  'weather_consumer_report_admin_changing_password_jwt_key';
if (ADMIN_CHANGE_PASSWORD_JWT_SECRET_KEY_MANTLED) {
  adminChangingPasswordJwtSecretKey_ =
    ADMIN_CHANGE_PASSWORD_JWT_SECRET_KEY_MANTLED;
}
export const adminChangingPasswordJwtSecretKey =
  adminChangingPasswordJwtSecretKey_;

let secretKeyOfChangingPasswordToken_ =
  'mantled_changing_password_secret_key_orca';
if (SECRET_KEY_OF_CHANGING_PASSWORD_TOKEN_MANTLED) {
  secretKeyOfChangingPasswordToken_ =
    SECRET_KEY_OF_CHANGING_PASSWORD_TOKEN_MANTLED;
}
export const secretKeyOfChangingPasswordToken =
  secretKeyOfChangingPasswordToken_;

let frontendAddress_ = 'http://localhost:3000';
if (FRONTEND_ADDRESS_MANTLED) {
  frontendAddress_ = FRONTEND_ADDRESS_MANTLED;
}

export const frontendAddress = frontendAddress_;

let myPort_: any = 6000;

if (PORT_MANTLED) {
  myPort_ = PORT_MANTLED;
}

export const myPort = myPort_;

let stripePublishableKey_ =
  'pk_test_51Qk1iMFxqeIeIgIv4jauq9SUOcKvo995GZSoOmQL0lKi5dDTlF7eeBvNSCuQR3XOUcsQ8DnEq9ZxiV4z4mKCwfZ600p5lxsKQd';
if (STRIPE_PUBLISHABLE_KEY_MANTLED) {
  stripePublishableKey_ = STRIPE_PUBLISHABLE_KEY_MANTLED;
}
export const stripePublishableKey = stripePublishableKey_;

let stripeSecretKey_ =
  'sk_test_51Qk1iMFxqeIeIgIvD07l65DZLJewZBAcDLgYrE5K4twe8Ji51rnXZBKBvMBIzWuZC4AAx3HeW1WRsCKNoRCP8Zq100RvHQ6Nkg';
if (STRIPE_SECRET_KEY_MANTLED) {
  stripeSecretKey_ = STRIPE_SECRET_KEY_MANTLED;
}
export const stripeSecretKey = stripeSecretKey_;

let rawEncryptionKey_ =
  'e50a3ac12385b32a75d2ec58c715f2bc7f8e38d4748a8b2d907ff2325f0243df';

if (RAW_ENCRYPTION_KEY_MANTLED) {
  rawEncryptionKey_ = RAW_ENCRYPTION_KEY_MANTLED;
}

const rawEncryptionKey = rawEncryptionKey_;

export const encryptionSecretKey = Buffer.from(rawEncryptionKey, 'hex');

let nodemailerService_ = 'gmail';
if (NODEMAILER_SERVICE_MANTLED) {
  nodemailerService_ = NODEMAILER_SERVICE_MANTLED;
}
export const nodemailerService = nodemailerService_;

let nodemailerUser_ = 'apurboroy7077@gmail.com';
if (NODEMAILER_USER_MANTLED) {
  nodemailerUser_ = NODEMAILER_USER_MANTLED;
}
export const nodemailerUser = nodemailerUser_;

let nodemailerPass_ = 'zijolyhlxxjydndu';
if (NODEMAILER_PASSWORD_MANTLED) {
  nodemailerPass_ = NODEMAILER_PASSWORD_MANTLED;
}

export const nodemailerPass = nodemailerPass_;
