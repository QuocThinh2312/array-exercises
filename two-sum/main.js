const twoSum = function (arr = [], k = 0) {
  const map = {};
  const res = [];

  arr.forEach((x) => {
    if (map[k - x] && !map[x]) res.push([x, k - x]);
    map[x] = true;
  });

  return res;
};

console.log(twoSum([1, 2, 3, 4, 2, 3, 4], 5));
