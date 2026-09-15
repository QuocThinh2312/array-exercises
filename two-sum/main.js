const twoSum = function (arr = [], k = 0) {
  const sortedArr = arr.toSorted((a, b) => a - b);
  let l = 0;
  let r = sortedArr.length - 1;
  const res = [];

  while (l < r) {
    const sum = sortedArr[l] + sortedArr[r];
    if (sum > k) --r;
    else if (sum < k) ++l;
    else {
      res.push([sortedArr[l], sortedArr[r]]);

      while (l < r && sortedArr[l] === sortedArr[l + 1]) ++l;
      while (l < r && sortedArr[r] === sortedArr[r - 1]) --r;

      ++l;
      --r;
    }
  }

  return res;
};
