export const quickSort = (array) => {
  const trace = [];

  console.log(array);

  const mergeHalves = (l, val, r) => {
    const arr1 = [];
    const arr2 = [];

    for (let i = l; i < r; i++) {
      if (array[i] < val) arr1.push(array[i]);
      if (array[i] > val) arr2.push(array[i]);
    }

    // for (let i = 0; i < arr1.length; i++) {
    //   trace.push({ array: [...array], active: [i], lcurr: l, rcurr: r });
    // }
    array[l + arr1.length] = val;
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      if (i < arr1.length) {
        array[l + i] = arr1[i];
        trace.push({
          array: [...array],
          active: [l + i],
          // lcurr: [l + arr1.length],
          // rcurr: [l + arr1.length] + 1,
          lcurr: -1,
          rcurr: -1,
        });
      }
      if (i < arr2.length) {
        array[l + arr1.length + arr2.length - i] = arr2[arr2.length - 1 - i];
        trace.push({
          array: [...array],
          active: [l + arr1.length + arr2.length - i],
          // lcurr: [l + arr1.length],
          // rcurr: [l + arr1.length] + 1,
          lcurr: -1,
          rcurr: -1,
        });
      }
    }
    return l + arr1.length;
  };

  const runQuick = (array, l, r) => {
    if (r === l) return array;
    let temp = [];
    for (let i = l; i < r; i++) {
      temp.push(array[i]);
    }
    temp.sort(function (a, b) {
      return a - b;
    });
    let val = temp[Math.floor(temp.length / 2)];
    let pivot = mergeHalves(l, val, r);

    if (r - l > 1) {
      runQuick(array, l, pivot);
      runQuick(array, pivot + 1, r);
    }
  };

  runQuick(array, 0, array.length);

  for (let i = 0; i < array.length; i++) {
    trace.push({ array: [...array], active: [i], lcurr: -1, rcurr: -1 });
  }
  trace.push({ array: [...array], active: [], lcurr: -1, rcurr: -1 });

  console.log(trace);
  return trace;
};
