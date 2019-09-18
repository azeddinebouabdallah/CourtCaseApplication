import PROVIDERS from '../../constants/providers';
import { Claim } from './claims.entity';

export const claimProviders = [
  {
    provide: PROVIDERS.CLAIM,
    useValue: Claim,
  },
];
