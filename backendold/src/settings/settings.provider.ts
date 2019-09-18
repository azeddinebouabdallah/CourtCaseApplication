import PROVIDERS from '../constants/providers';
import { Settings } from './settings.entity';

export const settingsProviders = [
  {
    provide: PROVIDERS.SETTINGS,
    useValue: Settings,
  },
];
