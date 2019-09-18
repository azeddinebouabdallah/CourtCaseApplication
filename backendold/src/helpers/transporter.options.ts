/* import nodemailer from 'nodemailer';
import TEMPLATES, { IMailOption } from './mail.options';

const config = {
    service: 'Gmail',
    auth: {
      // user: "secerlama@secerlama.com",
      // pass: "H99BuY<6"
      user: 'adnanahmic203@gmail.com',
      pass: 'pogresno32',
    },
  };

const provider = nodemailer.createTransport({
  ...config,
});
const mailer = {
    sendMail: async (data: { to: string, MAIL_OPTION: IMailOption }) => {
        const { MAIL_OPTION, to} = data;
        return await provider.sendMail({
            ...MAIL_OPTION,
            to,
          });
        },
};

export const MAIL_OPTIONS = TEMPLATES;

export default mailer;
 */