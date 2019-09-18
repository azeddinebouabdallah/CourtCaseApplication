import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CaseController } from './case.controller';
import { CaseService } from './case.service';
import { caseProviders } from './case.provider';
import { exhibitProviders } from './exhibit/exhibit.provider';
import { noticeProviders } from './notice/notice.provider';
import { decisionProviders } from './decision/decision.provider';
import { petitionProviders } from './petition/petition.provider';
import { verdictProviders } from './verdict/verdict.provider';
import { depositVoucherProviders } from './depositVoucher/deposit.voucher.provider';
import { claimProviders } from './claim/claim.provider';
import { fileProviders } from './file/file.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CaseController],
  providers: [
    CaseService,
    ...caseProviders,
    ...exhibitProviders,
    ...noticeProviders,
    ...decisionProviders,
    ...petitionProviders,
    ...verdictProviders,
    ...depositVoucherProviders,
    ...claimProviders,
    ...fileProviders,
  ],
  exports: [CaseService],
})
export class CaseModule {}
