import PROVIDERS from '../../constants/providers';
import { DepositVoucher } from './deposit.vouchers.entity';

export const depositVoucherProviders = [
  {
    provide: PROVIDERS.DEPOSIT_VOUCHER,
    useValue: DepositVoucher,
  },
];
