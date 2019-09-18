import { Body, Controller, Post, Res, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { ApiUseTags } from '@nestjs/swagger';
import { LoginDto, SignUpDto } from './auth.docs';
import { ILogin, IRegister } from 'src/interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';
/* import transporter, {MAIL_OPTIONS} from '../helpers/transporter.options';
 */@Controller('api/users')
@ApiUseTags('api/users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDto, @Res() res) {
    this.authService.login(data.email, data.password).then((data: ILogin) => {
      return res.send(data);
    });
  }

  @Post('create')
  public async register(@Body() data: SignUpDto,@Req() req, @Res() res) {
    if (!data || (data && Object.keys(data).length === 0))
      throw new Error('user:create:missingInformation');
    this.authService.register(data).then((data: IRegister) => {
     /*   transporter.sendMail({
        to: req.body.email,
        MAIL_OPTION: MAIL_OPTIONS.NEW_USER(data.user.dataValues.firstName),
      }); */
      return res.send(data);
    });
  }
}
