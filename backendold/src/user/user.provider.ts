import PROVIDERS from '../constants/providers';
import { User } from './user.entity';

export const userProviders = [
  {
    provide: PROVIDERS.USER,
    useValue: User,
  },
];
