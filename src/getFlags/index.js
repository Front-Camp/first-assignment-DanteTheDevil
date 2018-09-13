/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  let result = [];
  arr.forEach(function(i){
    for(let value of Object.values(i)){
      result.push(...value);
    }
  });
  return result;
};
export default getFlags;
