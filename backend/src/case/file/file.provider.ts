import PROVIDERS from '../../constants/providers';
import { File } from './file.entity';

export const fileProviders = [
  {
    provide: PROVIDERS.FILE,
    useValue: File,
  },
];
