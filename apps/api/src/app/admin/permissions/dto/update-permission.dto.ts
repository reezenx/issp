import { PartialType } from '@nestjs/swagger';
import { CreatePermissionDto } from './create-permissions.dto';

export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {}
