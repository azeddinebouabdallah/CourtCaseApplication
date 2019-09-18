import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SettingsController } from './settings.controller';
import { settingsProviders } from './settings.provider';
import { SettingsService } from './settings.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SettingsController],
  providers: [SettingsService, ...settingsProviders],
  exports: [SettingsService],
})
export class SettingsModule {}
