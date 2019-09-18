import PROVIDERS from 'src/constants/providers';
import { File } from './file.entity';

export const fileProviders = [
  {
    provide: PROVIDERS.FILE,
    useValue: File,
  },
];
