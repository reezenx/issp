import { DateTime } from 'luxon';
import { Subject } from 'rxjs';
import { DictionaryData, DictionaryDataItem } from './dictionary-data';

export class SubjectEx<T> extends Subject<DictionaryData<T>> {
  constructor() {
    super();
  }
  value: DictionaryData<T> = {};
  patch(index: string, data: T) {
    const cache = this.value;
    if (!cache[index]) {
      cache[index] = new DictionaryDataItem<T>();
    }
    cache[index].value = data;
    cache[index].lastUpdate = +DateTime.now();
    this.next(cache);
  }
}
