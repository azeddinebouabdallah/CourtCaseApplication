import { Controller, Get, Param, Res, Post, Body, Query, HttpStatus, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from  'path';
import { ApiUseTags } from '@nestjs/swagger';
import { data } from './mockdata';
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
import { CaseService } from './case.service';
import { DecisionDto } from './decision/decision.docs';
import console = require('console');
import { FilesInterceptor, FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { MULTER_OPTIONS } from '../lib/multer.module';

@Controller('api/cases')
@ApiUseTags('api/cases')
export class CaseController {
  constructor(private readonly caseService: CaseService) {}

  @Get()
  public async index(@Res() res) {
    const cases = await this.caseService.findAll({});
    return res.status(HttpStatus.OK).json(cases);
  }

  @Get('/resource')
  public async search(@Query() query, @Res() res) {4
      const cases = await this.caseService.casesSearch(query);
      return res.status(HttpStatus.OK).json(cases);
  }

  @Post('/new')
  createCase(@Body() data: CreateCaseDto, @Res() res) {
    this.caseService
      .registerNewCase(data)
      .then((data: ICreateCase) => {
        return res.status(HttpStatus.OK).send(data);
      })
      .catch(e => {
        console.log('error', e)
        return res.status(500).send(e)
      });
  }

  @Post('exhibit')
  createExhibit(@Body() data: ExhibitDto, @Res() res) {
    this.caseService
      .registerNewExhibit(data)
      .then((data: ICreateExhibit) => {
        console.log('Exhibit newwwww');
        return res.send(data);
      })
      .catch(e => console.log('error', e));
  }

  @Post('notice')
  createNotice(@Body() data: NoticeDto, @Res() res) {
    console.log('memememememe');
    this.caseService
      .registerNewNotice(data)
      .then((data: ICreateNotice) => {
        console.log('Notice newwwww');
        return res.send(data);
      })
      .catch(e => {
        console.log('error', e)
        return res.status(500).send(e)
      });
  }

  @Post('decision')
  createDecision(@Body() data: DecisionDto, @Res() res) {
    this.caseService
      .registerNewDecision(data)
      .then((data: ICreateDecision) => {
        console.log('Decision newwwww');
        return res.send(data);
      })
      .catch(e => {
        console.log('error', e)
        return res.status(500).send(e)
      });
  }

  @Post('petition')
  createPetition(@Body() data: PetitionDto, @Res() res) {
    this.caseService
      .registerNewPetition(data)
      .then((data: ICreatePetition) => {
        console.log('Petition newwwww');
        return res.send(data);
      })
      .catch(e => {
        console.log('error', e)
        return res.status(500).send(e)
      });
  }

  @Post('verdict')
  createVerdict(@Body() data: VerdictDto, @Res() res) {
    this.caseService
      .registerNewVerdict(data)
      .then((data: ICreateVerdict) => {
        console.log('Verdict newwwww');
        return res.send(data);
      })
      .catch(e => console.log('error', e));
  }

  @Post('deposit-voucher')
  createDepositVoucher(@Body() data: DepositVoucherDto, @Res() res) {
    this.caseService
      .registerNewDepositVoucher(data)
      .then((data: ICreateDepositVoucher) => {
        console.log('Deposit voucher newwwww');
        return res.send(data);
      })
      .catch(e => console.log('error', e));
  }

  @Post('claim')
  createClaim(@Body() data: ClaimDto, @Res() res) {
    this.caseService
      .registerNewClaim(data)
      .then((data: ICreateClaim) => {
        console.log('Claim newwwww');
        return res.send(data);
      })
      .catch(e => console.log('error', e));
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file',  MULTER_OPTIONS
    /*{
      storage: diskStorage({
        destination: './files',
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}${extname(file.originalname)}`)
        },
      }),
    }*/
    ),
  )
  uploadFile(@Body('caseId') caseId, @UploadedFile() file) {
    console.log(file);

    const data = {
      url: file.location as string,
      author: '',
      caseId: caseId,
    };
    console.log(data);

    this.caseService
      .registerNewFile(data)
      .then((data: ICreateFile) => {
        console.log('File newwwww');
        return 'Done';
        // return res.send(data);
      })
      .catch(e => console.log('error', e));

    // this.caseService.registerNewFile(Number(userId), `${this.SERVER_URL}${file.path}`);
  }

  // @Post('upload')
  // @UseInterceptors(FilesInterceptor('files'))
  // uploadFile(@UploadedFiles() files) {
  //   console.log(files);
  // }

  @Post('file')
  createFile(@Body() data: FileDto, @Res() res) {
    this.caseService
      .registerNewFile(data)
      .then((data: ICreateFile) => {
        console.log('File newwwww');
        return res.send(data);
      })
      .catch(e => console.log('error', e));
  }

  @Get('parties')
  async getCase(@Query() query) {
    return this.caseService.searchCase(query);
  }

  // @Get('exhibits')
  // async getExhibits(@Query() query) {
  //   return this.caseService.searchExhibit(query);
  // }

  // @Get('notices')
  // async getNotices(@Query() query) {
  //   return this.caseService.searchNotice(query);
  // }

  // @Get('decisions')
  // async getDecisions(@Query() query) {
  //   return this.caseService.searchDecision(query);
  // }

  // @Get('petitions')
  // async getPetitions(@Query() query) {
  //   return this.caseService.searchPetition(query);
  // }

  // @Get('verdicts')
  // async getVerdicts(@Query() query) {
  //   return this.caseService.searchVerdict(query);
  // }

  // @Get('deposit-vouchers')
  // async getDepositVouchers(@Query() query) {
  //   return this.caseService.searchDepositVoucher(query);
  // }

  // @Get('claims')
  // async getClaims(@Query() query) {
  //   return this.caseService.searchClaim(query);
  // }

  // @Get('files')
  // async getFiles(@Query() query) {
  //   return this.caseService.searchFile(query);
  // }
}
