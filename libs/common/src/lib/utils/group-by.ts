export class GroupedData<T> {
  constructor(key: string, count: number) {
    this.key = key;
    this.count = count;
  }

  key: string = null;
  count = 0;
  data: T[] = new Array<T>();
}

function groupBy<T>(xs: Array<T>, key: string): Array<GroupedData<T>> {
  return xs.reduce((pv, cv, idx, arr) => {
    const i = pv.find((e) => e.key === cv[key]);
    if (i) {
      pv.forEach((e) => {
        if (e.key === cv[key]) {
          e.count += 1;
          e.data.push(cv);
        }
      });
    } else {
      const p = new GroupedData(cv[key], 1);
      p.data.push(cv);
      pv.push(p);
    }
    return pv;
  }, []);
}

export class GroupedObject<T> {
  [key: string]: GroupedObjectData<T>;
}

export class GroupedObjectData<T> {
  constructor(count = 0) {
    this.count = count;
  }
  count = 0;
  data: T[] = new Array<T>();
}

function groupObjectBy<T>(xs: Array<T>, key: string): GroupedObject<T> {
  const data = new GroupedObject<T>();
  return xs.reduce((pv, cv, idx, arr) => {
    const i = cv[key];
    const ps = i.toString();
    if (pv[ps]) {
      pv[ps].data.push(cv);
      pv[ps].count += 1;
    } else {
      pv[ps] = new GroupedObjectData<T>(1);
      pv[ps].data.push(cv);
      pv[ps].count = 1;
    }
    return pv;
  }, data);
}

export { groupBy, groupObjectBy };
