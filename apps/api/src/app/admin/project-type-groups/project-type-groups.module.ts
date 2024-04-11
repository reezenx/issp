import { Module } from '@nestjs/common';
import { ProjectTypeGroupsService } from './project-type-groups.service';
import { ProjectTypeGroupsController } from './project-type-groups.controller';

@Module({
  controllers: [ProjectTypeGroupsController],
  providers: [ProjectTypeGroupsService],
})
export class ProjectTypeGroupsModule {}
