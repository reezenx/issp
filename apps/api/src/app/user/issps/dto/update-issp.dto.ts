import { PartialType } from '@nestjs/swagger';
import { CreateIsspDto } from './create-issp.dto';

export class UpdateIsspDto extends PartialType(CreateIsspDto) {}
