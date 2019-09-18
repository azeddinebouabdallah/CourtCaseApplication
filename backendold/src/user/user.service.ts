import { Inject, Injectable } from '@nestjs/common';
import PROVIDERS from '../constants/providers';
import { User } from './user.entity';
import { MailerService } from '@nest-modules/mailer';
import { SignUpDto } from '../auth/auth.docs';
import * as bcrypt from 'bcryptjs';
import { IResetPassword } from 'src/interfaces/user.interface';


@Injectable()
export class UserService {
  constructor(
    @Inject(PROVIDERS.USER)
    private readonly USER_REPOSITORY: typeof User,
    private readonly mailerService: MailerService,
  ) {}

  getAllUsers = async () => {
    return this.USER_REPOSITORY.findAll<User>();
  };

  createNewUser = async (data: SignUpDto) => {
    return this.USER_REPOSITORY.create(data);
  };

  findByEmail = async (email: string) => {
    return this.USER_REPOSITORY.findOne({
      where: {
        email: email,
      },
    });
  };

  resetToken = (email: string): string => {
    return bcrypt.hashSync(email, 10);
  };

  async forgotPassword(email: string): Promise<IResetPassword> {
    try {
      const resetToken = this.resetToken(email);
      this.mailerService.sendMail({
        to: email,
        from: 'adnanahmic203@gmail.com',
        subject: 'Reset password ✔', // Subject line
        text: `Reset your password: http://localhost:3000/reset-password/${resetToken}`,
        html: `<b>Reset your password:</b> <a href="http://localhost:3000/reset-password/${resetToken}" > here </a> `,
      });
      return this.updateResetToken(resetToken, email);
    } catch (error) {
      return {
        message: 'Error occurred while sending email',
        status: 500,
      };
    }
  }

  updateResetToken = async (
    token: string,
    email: string,
  ): Promise<IResetPassword> => {
    const user = await this.findByEmail(email);
    if (user) {
      user.resetToken = token;
      user.save();

      return {
        message: 'Reset link will be sent to your email',
        status: 200,
        resetToken: token,
      };
    }
    return {
      message: 'Email does not exist',
      status: 400,
    };
  };

  async resetPassword(
    password: string,
    resetToken: string,
  ): Promise<IResetPassword> {
    try {
      const user = await this.USER_REPOSITORY.findOne({
        where: {
          resetToken: resetToken,
        },
      });
      user.password = bcrypt.hashSync(password, 10);
      user.resetToken = null;
      user.save();
      return {
        message: 'Password changed',
        status: 200,
      };
    } catch (error) {
      return {
        message: 'Error occurred while changing password',
        status: 500,
      };
    }

    }

  async sendReminderEmail(email, username) {
    try {
    this.mailerService.sendMail({
    to: email,
    from: 'adnanahmic203@gmail.com',
    subject: 'Reminder',
    text: `Dear ${username} this email is to inform you that Session will be in next 7 days! Click Here: http://localhost:3000/nextsessions`,
    html: `<b>Reminder:</b> Dear ${username} this email is to inform you that Session will be in next 7 days! <a href="http://localhost:3000/nextsessions"> Here </a>z`
    });
    }
    catch (error) {
    return {
    message: 'Error occurred while sending email',
    status: 500,
    
    };
    }
  }
}


/*

and you need to add on backend part, code which will send user an email when there is 7 day before first session date
I will send you some code for that backend part
/=============
async sendEmail(email) {
try {
this.mailerService.sendMail({
to: email,
from: 'adnanahmic203@gmail.com',
subject: 'Reminder',
text: Reminder: http://localhost:3000/${subject},
html: <b>Reminder:</b> <a href="http://localhost:3000/${subject}" > here </a>,
});
}
catch (error) {
return {
message: 'Error occurred while sending email',
status: 500,

};
}
}
=============/

You will change this links to be pointed on next session details

/=============
if (moment(wedding.processTime).subtract(7, 'days').format('DD.MM.YYYY') === moment().format('DD.MM.YYYY')) {

transporter.sendMail({
to: wedding.groomEmail,
MAIL_OPTION: MAIL_OPTIONS.WEDDING_WEEK_BEFORE_PROCESSED_GROOM
(wedding.groomFullName, wedding.processTime, wedding._id),
});
transporter.sendMail({
to: wedding.brideEmail,
MAIL_OPTION: MAIL_OPTIONS.WEDDING_WEEK_BEFORE_PROCESSED_BRIDE
(wedding.brideFullName, wedding.processTime, wedding._id),
});
console.log('Last 7 days before session');
=============/

You will just change parameters because it is from my old project

I think you are familiar with node mailer

?

this is an example from this project regarding to forgot password

/============ 
async forgotPassword(email) {
try {
const resetToken = this.resetToken(email);
this.mailerService.sendMail({
to: email,
from: '',
subject: 'Reset password ✔',
text: Reset your password: http://localhost:3000/reset-password/${resetToken},
html: <b>Reset your password:</b> <a href="http://localhost:3000/reset-password/${resetToken}" > here </a>,
});
return this.updateResetToken(resetToken, email);
}
catch (error) {
return {
message: 'Error occurred while sending email',
status: 500,
};
}
}
============/
 */