/**
 *
 * @param {Array} array
 * @param {String} keyName
 * @param {String('Object' || 'Array')} returnType
 * @returns hashTable with the keys and the values
 */
export default (array, keyName, returnType = "Object") => {
  const table = {};
  array?.forEach((e, idx) => {
    if (returnType === "Array") {
      if (table[e[keyName]]) {
        table[e[keyName]] = [...table[e[keyName]], { ...e, idx }];
      } else {
        table[e[keyName]] = [{ ...e, idx }];
      }
    } else {
      table[e[keyName]] = e;
    }
  });

  return table;
};
