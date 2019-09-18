import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SettingsController } from './settings/settings.controller';
import { SettingsModule } from './settings/settings.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import { CaseService } from './case/case.service';
import { CaseController } from './case/case.controller';
import { CaseModule } from './case/case.module';

@Module({
  imports: [
    SettingsModule,
    DatabaseModule,
    UserModule,
    AuthModule,
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          // host: 'mail.google.com',
          service: 'Gmail',
          port: 587,
          secure: false,
          auth: {
            user: 'contigoutest@gmail.com',
            pass: 'K!jali248',
          },
        },
        defaults: {
          from: '"nest-modules" <modules@nestjs.com>',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new HandlebarsAdapter(), // or new PugAdapter()
          options: {
            strict: true,
          },
        },
      }),
    }),
    CaseModule,
  ],
  controllers: [
    AppController,
    SettingsController,
    UserController,
    AuthController,
    CaseController,
  ],
  providers: [AppService],
})
export class AppModule {}
