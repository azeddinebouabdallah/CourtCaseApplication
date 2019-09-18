import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';
import * as path from 'path';
​
dotenv.config();
​
export interface EnvConfig {
  [key: string]: string;
}
​
export class ConfigService {
  private readonly envConfig: { [key: string]: string };
  constructor(filePath: string = '.env') {
    const publicConfigFile = fs.readFileSync(
      path.join(__dirname, `../../${filePath}`),
    );
    const publicConfig = dotenv.parse(publicConfigFile);
​
    const secretConfigFile = path.join(
      __dirname,
      `../../${filePath}.${publicConfig.NODE_ENV}`,
    );
​
    const secretConfig = dotenv.parse(fs.readFileSync(secretConfigFile));
​
    const config = {
      ...publicConfig,
      ...secretConfig,
    };
    this.envConfig = this.validateInput(config);
  }
​
  get(key: string): string {
    return this.envConfig[key];
  }
​
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test', 'provision'])
        .default('development'),
      // PORT: Joi.number().default(3001),
      // DB_HOST: Joi.string().required(),
      // DB_USER: Joi.string().required(),
      // DB_PASSWORD: Joi.string()
      //   .optional()
      //   .allow(null, ''),
      // DB_PORT: Joi.string().required(),
      // DB_NAME: Joi.string().required(),
      AWS_S3_BUCKET_NAME: Joi.string()
        .optional()
        .allow(null, ''),
      AWS_ACCESS_KEY_ID: Joi.string()
        .optional()
        .allow(null, ''),
      AWS_SECRET_ACCESS_KEY: Joi.string()
        .optional()
        .allow(null, ''),
      AWS_S3_BUCKET_REGION: Joi.string()
        .optional()
        .allow(null, ''),
    });
​
    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}
