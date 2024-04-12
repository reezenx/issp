// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sortBy(list: Array<any>, ...sortProperties) {
  if (sortProperties.length === 0) return list;

  list.sort((prev, next) => {
    for (let i = 0; i < sortProperties.length; i++) {
      // params should be in the form of "property:asc" or "property" or "property:desc"
      const sortProperty = sortProperties[i];
      const property = sortProperty.substring(0, sortProperty.indexOf(':'));
      const order = sortProperty.substring(sortProperty.indexOf(':') + 1);

      if (prev[property] === next[property]) continue; // Continue to the next iteration if properties are equal

      // Return the order based on the comparison result
      if (order !== 'desc') {
        return getPropertyValue(prev[property]) >
          getPropertyValue(next[property])
          ? 1
          : -1;
      } else {
        return getPropertyValue(prev[property]) >
          getPropertyValue(next[property])
          ? -1
          : 1;
      }
    }
    return 0; //
  });
  return list;
}

function getPropertyValue(value) {
  if (!isNaN(value)) return value;
  return value?.toString().toLocaleLowerCase();
}

export { sortBy };
