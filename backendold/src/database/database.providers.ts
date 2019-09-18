import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/user.entity';
import { Settings } from '../settings/settings.entity';
import { Case } from '../case/case.entity';
import { Claim } from '../case/claim/claims.entity';
import { Decision } from '../case/decision/decisions.entity';
import { DepositVoucher } from '../case/depositVoucher/deposit.vouchers.entity';
import { Exhibit } from 'src/case/exhibit/exhibits.entity';
import { Notice } from 'src/case/notice/notices.entity';
import { Petition } from '../case/petition/petitions.entity';
import { Verdict } from '../case/verdict/verdicts.entity';
import { File } from '../case/file/file.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'ec2-46-137-91-216.eu-west-1.compute.amazonaws.com',
        port: 5432,
        username: 'gqekymuziineks',
        password:
          '0f1d221efcd8a97e98fb6c6cf0e6308cb0888bdf7d8159c9f7fb5abe15bd526b',
        database: 'dcfkartsavpcvd',
        dialectOptions: {
          ssl: true,
        },
      });
      sequelize.addModels([
        Settings,
        User,
        Case,
        Claim,
        Decision,
        DepositVoucher,
        Exhibit,
        File,
        Notice,
        Petition,
        Verdict,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
