import { ApiModelProperty } from '@nestjs/swagger';

export class ForgotPasswordDto {
  @ApiModelProperty({
    required: true,
    description: 'User email',
  })
  readonly email: string;
}

export class ResetPasswordDto {
  @ApiModelProperty({
    required: true,
    description: 'User password',
  })
  readonly password: string;
  @ApiModelProperty({
    required: true,
    description: 'User reset token',
  })
  readonly resetToken: string;
}
