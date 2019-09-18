import { Inject, Injectable } from '@nestjs/common';
import PROVIDERS from '../constants/providers';
import { CreateSettingsDto } from './settings.docs';
import { Settings } from './settings.entity';

@Injectable()
export class SettingsService {
  constructor(
    @Inject(PROVIDERS.SETTINGS)
    private readonly SETTINGS_REPOSITORY: typeof Settings,
  ) {}

  getSettings = async (): Promise<Settings[]> => {
    return await this.SETTINGS_REPOSITORY.findAll<Settings>();
  };

  createSettingsEntry = async (data: CreateSettingsDto): Promise<Settings> => {
    return this.SETTINGS_REPOSITORY.create(data);
  };
}
