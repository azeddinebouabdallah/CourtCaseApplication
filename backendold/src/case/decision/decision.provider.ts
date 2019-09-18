import PROVIDERS from 'src/constants/providers';
import { Decision } from './decisions.entity';

export const decisionProviders = [
  {
    provide: PROVIDERS.DECISION,
    useValue: Decision,
  },
];
