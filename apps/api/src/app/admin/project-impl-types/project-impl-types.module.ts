import { Module } from '@nestjs/common';
import { ProjectImplTypesService } from './project-impl-types.service';
import { ProjectImplTypesController } from './project-impl-types.controller';

@Module({
  controllers: [ProjectImplTypesController],
  providers: [ProjectImplTypesService],
})
export class ProjectImplTypesModule {}
