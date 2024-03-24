import { Module } from '@nestjs/common';
import { IsspService } from './issps.service';
import { IsspController } from './issps.controller';

@Module({
  controllers: [IsspController],
  providers: [IsspService],
})
export class IsspsModule {}
