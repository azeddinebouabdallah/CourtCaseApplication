import PROVIDERS from 'src/constants/providers';
import { Petition } from './petitions.entity';

export const petitionProviders = [
  {
    provide: PROVIDERS.PETITION,
    useValue: Petition,
  },
];
