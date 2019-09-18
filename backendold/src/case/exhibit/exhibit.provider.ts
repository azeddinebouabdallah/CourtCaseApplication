import PROVIDERS from 'src/constants/providers';
import { Exhibit } from './exhibits.entity';

export const exhibitProviders = [
  {
    provide: PROVIDERS.EXHIBIT,
    useValue: Exhibit,
  },
];
