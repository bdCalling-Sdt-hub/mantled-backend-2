import nodemailer from 'nodemailer';
import {
  nodemailerPass,
  nodemailerService,
  nodemailerUser,
} from '../../data/environmentVariables';

// Create a transporter
export const nodemailerTransporter = nodemailer.createTransport({
  service: nodemailerService, // or any other service
  auth: {
    user: nodemailerUser,
    pass: nodemailerPass,
  },
});

// Sending an email
// const mailOptions = {
//   from: "port.denison.customer.care@gmail.com",
//   to: "apurboroy7077@gmail.com",
//   subject: "Test Email",
//   text: "This is a test email sent using nodemailer!",
// };

// nodemailerTransporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error("Error:", error);
//   } else {
//     console.log("Email sent:", info.response);
//   }
// });
