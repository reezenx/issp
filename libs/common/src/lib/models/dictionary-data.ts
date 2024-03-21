export class DictionaryDataItem<T> {
  value: T | null = null;
  lastUpdate = 0;
}

export class DictionaryData<T> {
  [key: string]: DictionaryDataItem<T>;
}
