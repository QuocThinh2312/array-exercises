const findMinMax = function (arr = []) {
  if (arr.length === 0) return 'Array is empty!';
  arr.sort((a, b) => a - b);
  return { min: arr[0], max: arr.at(-1) };
};
