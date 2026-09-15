const rotate = function (arr = [], x = 0) {
  const steps = x % arr.length || arr.length;
  return arr.slice(-steps).concat(arr.slice(0, arr.length - steps));
};
