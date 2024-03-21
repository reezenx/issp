export abstract class Assign {
  [key: string]: any;
  assign(obj: any): void {
    if (!obj) return;
    Object.keys(obj).forEach((key) => {
      const rawVal = obj[key];
      if (rawVal !== undefined) {
        // If the property is null, then set the object val to null (except for arrays)
        if (rawVal === null) {
          if (this[key] instanceof Array == false) {
            this[key] = null;
          } else {
            this[key] = [];
          }
        } else {
          const propValue =
            rawVal !== null &&
            isNaN(rawVal) &&
            !(rawVal instanceof Array) &&
            !(rawVal instanceof Object)
              ? obj[key].trimEnd()
              : obj[key];
          // Deal with Dates (date properties on model should be set to the min Date)
          // E.g. quoteDate: Date = new Date('0001-01-01T00:00:00Z');
          if (this[key] instanceof Date && propValue != null) {
            this[key] = new Date(propValue);
          }
          // Deal with strings and numbers (we don't want to set Date properties to null)
          if (!(this[key] instanceof Date)) {
            // Check if the property supports assign. If it does, we'll use that to set the value. If not, we'll just copy it.
            if (
              this[key] &&
              this[key] instanceof Array == false &&
              typeof this[key] == 'object' &&
              typeof this[key]['assign'] == 'function'
            ) {
              this[key]['assign'](propValue);
            } else {
              this[key] = propValue;
            }
          }
        }
      } else {
        // This takes care of TypeScript properties that are declared but haven't been initialised (to null or a value). Typically this is Id fields.
        this[key] = obj[key];
      }
    });
  }
}
