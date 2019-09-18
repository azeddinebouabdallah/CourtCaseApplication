import PROVIDERS from 'src/constants/providers';
import { Case } from './case.entity';

export const caseProviders = [
  {
    provide: PROVIDERS.CASE,
    useValue: Case,
  },
];
