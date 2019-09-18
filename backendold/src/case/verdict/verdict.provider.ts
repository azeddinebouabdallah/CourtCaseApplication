import PROVIDERS from 'src/constants/providers';
import { Verdict } from './verdicts.entity';

export const verdictProviders = [
  {
    provide: PROVIDERS.VERDICT,
    useValue: Verdict,
  },
];
