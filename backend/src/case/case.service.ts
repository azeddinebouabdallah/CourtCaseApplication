import { Injectable, Inject } from '@nestjs/common';
import { Case } from './case.entity';
import { MailerService } from '@nest-modules/mailer';
import {
  CaseDto,
  ExhibitDto,
  NoticeDto,
  PetitionDto,
  VerdictDto,
  DepositVoucherDto,
  ClaimDto,
  FileDto,
  CreateCaseDto,
} from './case.docs';
import PROVIDERS from '../constants/providers';
import {
  ICreateCase,
  ICreateExhibit,
  ICreateNotice,
  ICreateDecision,
  ICreatePetition,
  ICreateVerdict,
  ICreateDepositVoucher,
  ICreateClaim,
  ICreateFile,
} from 'src/interfaces/user.interface';
import { Exhibit } from './exhibit/exhibits.entity';
import { Notice } from './notice/notices.entity';
import { Decision } from './decision/decisions.entity';
import { Petition } from './petition/petitions.entity';
import { Verdict } from './verdict/verdicts.entity';
import { DepositVoucher } from './depositVoucher/deposit.vouchers.entity';
import { Claim } from './claim/claims.entity';
import { DecisionDto } from './decision/decision.docs';
import { File } from './file/file.entity';
import paginate from '../paginate';
import ISearchObject from '../../index';
import * as _ from 'lodash';

@Injectable()
export class CaseService {
  constructor(
    @Inject(PROVIDERS.CASE)
    private readonly CASE_REPOSITORY: typeof Case,
    @Inject(PROVIDERS.EXHIBIT)
    private readonly EXHIBIT_REPOSITORY: typeof Exhibit,
    @Inject(PROVIDERS.NOTICE)
    private readonly NOTICE_REPOSITORY: typeof Notice,
    @Inject(PROVIDERS.DECISION)
    private readonly DECISION_REPOSITORY: typeof Decision,
    @Inject(PROVIDERS.PETITION)
    private readonly PETITION_REPOSITORY: typeof Petition,
    @Inject(PROVIDERS.VERDICT)
    private readonly VERDICT_REPOSITORY: typeof Verdict,
    @Inject(PROVIDERS.DEPOSIT_VOUCHER)
    private readonly DEPOSIT_VOUCHER_REPOSITORY: typeof DepositVoucher,
    @Inject(PROVIDERS.CLAIM)
    private readonly CLAIM_REPOSITORY: typeof Claim,
    @Inject(PROVIDERS.FILE)
    private readonly FILE_REPOSITORY: typeof File,
    private readonly mailerService: MailerService,
  ) {}

  findAll = async (query?: ISearchObject) =>
    this.CASE_REPOSITORY.findAll(query);

  findAndCountAll = async (data: CreateCaseDto) =>
    this.CASE_REPOSITORY.findAndCountAll({});

  searchCase = async id => {
    console.log('ID ---------------------- ' + id)
    return this.CASE_REPOSITORY.findOne<Case>({
      where: {id : id},
      include: [
        {
          model: File,
          as: 'attachments',
          where: {
            type: 'party',
          },
          // association: 'attachments',
        },
        {
          model: File,
          as: 'petitionsAttachments',
          where: {
            type: 'petititon',
          },
        },
        Exhibit,
        Claim,
        Decision,
        DepositVoucher,
        Notice,
        Petition,
        Verdict,
      ],
    });
  };

  casesSearch = async (query: ISearchObject, include?: ISearchObject) => {
    if (query.itemsPerPage && query.currentPage) {
      const paginateProps = {
        page: Number(query.currentPage),
        pageSize: Number(query.itemsPerPage),
      };
      return await this.CASE_REPOSITORY.findAndCountAll({
        where: _.omit(query, ['itemsPerPage', 'currentPage']),
        ...paginate(paginateProps),
      });
    } else {
      return await this.CASE_REPOSITORY.findAll({
        where: query,
      });
    }
  };

  public async registerNewCase(caseData: CreateCaseDto) {
    console.log('Register new case : ', caseData, '\n');
    const newCase: Case = await this.CASE_REPOSITORY.create(caseData);
    this.mailerService.sendMail({
      to: 'adnanahmic203@gmail.com',
      from: 'adnanahmic203@gmail.com',
      subject: 'New maintenance created :heavy_check_mark:', // Subject line
      text: `New maintenance created`,
      html: `<b>New maintenance created</b>`,
    });
    return {
      message: 'Case created',
      case: newCase,
      status: 200,
    };
  }

  public async registerNewExhibit(
    exhibit: ExhibitDto,
  ): Promise<ICreateExhibit> {
    console.log('Regisster new Exhibit', exhibit, '\n')
    const newExhibit: Exhibit = await this.EXHIBIT_REPOSITORY.create(exhibit);
    return {
      message: 'Exhibit created',
      exhibit: newExhibit,
      status: 200,
    };
  }

  public async registerNewNotice(notice: NoticeDto): Promise<ICreateNotice> {
    console.log('Regisster new Notice', notice, '\n')

    const newNotice: Notice = await this.NOTICE_REPOSITORY.create(notice);
    return {
      message: 'Notice created',
      notice: newNotice,
      status: 200,
    };
  }

  public async registerNewDecision(
    decision: DecisionDto,
  ): Promise<ICreateDecision> {
    console.log('Regisster new Decision', decision, '\n')

    const newDecision: Decision = await this.DECISION_REPOSITORY.create(
      decision,
    );
    return {
      message: 'Decision created',
      decision: newDecision,
      status: 200,
    };
  }

  public async registerNewPetition(
    petition: PetitionDto,
  ): Promise<ICreatePetition> {
    console.log('Regisster new Petition', petition, '\n')
    const newPetition: Petition = await this.PETITION_REPOSITORY.create(
      petition,
    );
    return {
      message: 'Petition created',
      petition: newPetition,
      status: 200,
    };
  }

  public async registerNewVerdict(
    verdict: VerdictDto,
  ): Promise<ICreateVerdict> {
    console.log('Regisster new Verdict', verdict, '\n')

    const newVerdict: Verdict = await this.VERDICT_REPOSITORY.create(verdict);
    return {
      message: 'Verdict created',
      verdict: newVerdict,
      status: 200,
    };
  }

  public async registerNewDepositVoucher(
    depositVoucher: DepositVoucherDto,
  ): Promise<ICreateDepositVoucher> {
    console.log('Regisster new depositVoucher', depositVoucher, '\n')

    const newDepositVoucher: DepositVoucher = await this.DEPOSIT_VOUCHER_REPOSITORY.create(
      depositVoucher,
    );
    return {
      message: 'Deposit voucher created',
      depositVoucher: newDepositVoucher,
      status: 200,
    };
  }

  public async registerNewClaim(claim: ClaimDto): Promise<ICreateClaim> {
    console.log('Regisster new Claim', claim, '\n')

    const newClaim: Claim = await this.CLAIM_REPOSITORY.create(claim);
    return {
      message: 'Claim created',
      claim: newClaim,
      status: 200,
    };
  }

  public async registerNewFile(file: FileDto): Promise<ICreateFile> {
    console.log('Regisster new File', file, '\n')

    const newFile: File = await this.FILE_REPOSITORY.create(file);
    return {
      message: 'File created',
      file: newFile,
      status: 200,
    };
  }

  // searchParties = async query => {
  //   return this.CASE_REPOSITORY.findAll<Case>({
  //     where: query,
  //   });
  // };

  // searchExhibit = async query => {
  //   return this.EXHIBIT_REPOSITORY.findAll<Exhibit>({
  //     where: query,
  //   });
  // };

  // searchNotice = async query => {
  //   return this.NOTICE_REPOSITORY.findAll<Notice>({
  //     where: query,
  //   });
  // };

  // searchDecision = async query => {
  //   return this.DECISION_REPOSITORY.findAll<Decision>({
  //     where: query,
  //   });
  // };

  // searchPetition = async query => {
  //   return this.PETITION_REPOSITORY.findAll<Petition>({
  //     where: query,
  //   });
  // };

  // searchVerdict = async query => {
  //   return this.VERDICT_REPOSITORY.findAll<Verdict>({
  //     where: query,
  //   });
  // };

  // searchDepositVoucher = async query => {
  //   return this.DEPOSIT_VOUCHER_REPOSITORY.findAll<DepositVoucher>({
  //     where: query,
  //   });
  // };

  // searchClaim = async query => {
  //   return this.CLAIM_REPOSITORY.findAll<Claim>({
  //     where: query,
  //   });
  // };

  // searchFile = async query => {
  //   return this.FILE_REPOSITORY.findAll<File>({
  //     where: query,
  //   });
  // };
}
