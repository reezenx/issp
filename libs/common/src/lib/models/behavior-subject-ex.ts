import { DateTime } from 'luxon';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { DictionaryData, DictionaryDataItem } from './dictionary-data';

export class BehaviorSubjectEx<T> extends BehaviorSubject<DictionaryData<T>> {
  constructor(defaultValue: DictionaryData<T>) {
    super(defaultValue);
  }

  patch(index: string, data: T) {
    const cache = this.value;
    if (!cache[index]) {
      cache[index] = new DictionaryDataItem<T>();
    }
    cache[index].value = data;
    cache[index].lastUpdate = +DateTime.now();
    this.next(cache);
  }

  asFilteredObservable(
    key: string,
    timeOfLastUpdate: () => number
  ): Observable<DictionaryData<T>> {
    return this.pipe(
      filter((data) => data[key].lastUpdate > timeOfLastUpdate())
    );
  }
}
