import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';
import {
  MulterModule,
  MulterOptionsFactory,
  MulterModuleOptions,
} from '@nestjs/platform-express';
import { ConfigService } from './config';

export function createMulterOptions(): MulterModuleOptions {
  const configService = new ConfigService('.env');
  const s3 = new AWS.S3({
    accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
    secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
    signatureVersion: 'v4',
    region: configService.get('AWS_S3_BUCKET_REGION'),
  });

  return {
    storage: multerS3({
      s3: s3,
      bucket: configService.get('AWS_S3_BUCKET_NAME'),
      acl: 'public-read',
      // metadata: (req, file, cb) => {
      //   cb(null, { fieldName: 'file.fieldname' });
      // },
      // metadata: (req, file, cb) => {
      //   console.log('file');
      //   cb(null, { filename: 'foo' });
      // },
      key: function(request, file, cb) {
        console.log(file);
        cb(null, `${Date.now().toString()} - ${file.originalname}`);
      },
    }),
  };
}

export const MULTER_OPTIONS = createMulterOptions();
