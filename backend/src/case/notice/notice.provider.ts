import PROVIDERS from '../../constants/providers';
import { Notice } from './notices.entity';

export const noticeProviders = [
  {
    provide: PROVIDERS.NOTICE,
    useValue: Notice,
  },
];
