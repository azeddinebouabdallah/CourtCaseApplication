import PROVIDERS from 'src/constants/providers';
import { Attachment } from './attachment.entity';

export const fileProviders = [
  {
    provide: PROVIDERS.FILE,
    useValue: Attachment,
  },
];
