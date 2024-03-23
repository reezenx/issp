import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase',
})
export class SentenceCasePipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    if (!value || typeof value !== 'string') return '';
    const splitIdentifier = args[0] ?? '_';

    // Split the string into words
    const words = value.split(splitIdentifier);

    // Capitalize the first letter of each word
    const sentenceCaseWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    // Join the words back together to form the sentence case string
    const result = sentenceCaseWords.join(' ');

    return result;
  }
}
