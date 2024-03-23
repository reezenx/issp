import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitCamelCase',
})
export class SplitCamelCasePipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: string, ...args: string[]): string {
    if (!value || typeof value !== 'string') return '';
    const result = (value as string).replace(/([a-z])([A-Z])/g, '$1 $2');
    return result;
  }
}
