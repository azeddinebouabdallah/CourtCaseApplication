import { ApiModelProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiModelProperty({
    required: true,
    description: 'first name',
  })
  readonly firstName: string;

  @ApiModelProperty({
    required: true,
    description: 'last name',
  })
  readonly lastName: string;

  @ApiModelProperty({
    required: true,
    description: 'email',
  })
  readonly email: string;

  @ApiModelProperty({
    required: true,
    description: 'password',
  })
  password: string;

  @ApiModelProperty({
    required: true,
    description: 'role',
  })
  readonly role: string;
}

export class LoginDto {
  @ApiModelProperty({
    required: true,
    description: 'email',
  })
  readonly email: string;

  @ApiModelProperty({
    required: true,
    description: 'password',
  })
  readonly password: string;
}
