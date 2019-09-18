import { ApiModelProperty } from '@nestjs/swagger';

export class DecisionDto {
  @ApiModelProperty({ required: true, description: 'decision number' })
  decisionNumber: number;

  @ApiModelProperty({ required: true, description: 'date' })
  date: Date;

  @ApiModelProperty({ required: true, description: 'source' })
  source: string;

  @ApiModelProperty({ required: true, description: 'decision' })
  decision: string;

  @ApiModelProperty({ required: true, description: 'links' })
  links: string[];

  @ApiModelProperty({ required: true, description: 'case id' })
  caseId: string;
}
