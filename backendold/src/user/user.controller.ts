import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { ForgotPasswordDto, ResetPasswordDto } from './user.docs';
import { UserService } from './user.service';
import { IResetPassword } from 'src/interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import _ = require('lodash');

@Controller('api/users')
@ApiUseTags('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.userService.getAllUsers();
  }

  @Post('/forgot-password')
  forgotPassword(@Body() data: ForgotPasswordDto, @Res() res) {
    this.userService
      .forgotPassword(data.email)
      .then((newData: IResetPassword) => {
        res.send(newData);
        return res;
      })
      .catch(e => console.log('error', e));
  }

  @Post('/reset-password')
  resetPassword(@Body() data: ResetPasswordDto, @Res() res) {
    this.userService
      .resetPassword(data.password, data.resetToken)
      .then((data: IResetPassword) => {
        return res.send(data);
      });
  }

  @ApiBearerAuth()
  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  showMe(@Req() req, @Res() res) {
    const response = _.omit(req.user.dataValues, ['password', 'role']);
    response['permissions'] = AuthService.generateRoles(
      req.user.dataValues.role,
    );
    return res.json(response);
  }
}
