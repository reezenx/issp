import { Module } from '@nestjs/common';
import { IsspService } from './issp.service';
import { IsspController } from './issp.controller';

@Module({
  controllers: [IsspController],
  providers: [IsspService],
})
export class IsspModule {}
