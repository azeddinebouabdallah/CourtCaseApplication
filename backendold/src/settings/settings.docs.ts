import { ApiModelProperty } from '@nestjs/swagger';

export class CreateSettingsDto {
  @ApiModelProperty()
  readonly appVersion: string;
}
