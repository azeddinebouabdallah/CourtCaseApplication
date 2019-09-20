import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { ILogin, IRegister } from '../interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './auth.docs';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(payload: JwtPayload): Promise<User> {
    return await this.userService.findByEmail(payload.email);
  }

  public async login(email: string, password: string): Promise<ILogin> {
    const user = await this.validate({ email: email });
    if (!user) {
      return { message: 'Wrong credentials', status: 400 };
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return { message: 'Wrong credentials', status: 400 };
    }
    let payload = `${user.email}${user.role}`;
    const accessToken = this.jwtService.sign({
      email: user.email,
      role: user.role,
    });
    return {
      token: 'Bearer ' + accessToken,
      message: 'Login successful',
      user: user,
      status: 200,
    };
  }

  public async register(user: SignUpDto): Promise<IRegister> {
    const existingUser = await this.validate({ email: user.email });
    if (existingUser) {
      return { message: 'This email is already in use', status: 400 };
    }
    const newUser: User = await this.userService.createNewUser(user);
    return {
      message: 'Account created',
      user: newUser,
      status: 200,
    };
  }

  static generateRoles = (role: string) => {
    switch (role) {
      case 'admin':
        return {
          admin: true,
          user: true,
        };
      case 'lawyer':
        return {
          admin: false,
          user: true,
        };
    }
  };
}
