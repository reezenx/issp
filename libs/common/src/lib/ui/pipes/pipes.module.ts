import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitCamelCasePipe } from './spilt-camel-case.pipe';
import { SentenceCasePipe } from './sentence-case.pipe';

@NgModule({
  declarations: [SplitCamelCasePipe, SentenceCasePipe],
  exports: [SplitCamelCasePipe, SentenceCasePipe],
  imports: [CommonModule],
})
export class PipesModule {}
