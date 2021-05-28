export const mergeSort = (array) => {
  const trace = [];

  console.log(array);

  const mergeHalves = (l, m, r) => {
    const arr1 = array.slice(l, m);
    const arr2 = array.slice(m, r);

    let i = 0,
      j = 0,
      k = l;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        array[k++] = arr1[i++];
        trace.push({ array: [...array], active: [k], lcurr: l, rcurr: r });
      } else {
        array[k++] = arr2[j++];
        trace.push({ array: [...array], active: [k], lcurr: l, rcurr: r });
      }
    }
    while (i < arr1.length) {
      array[k++] = arr1[i++];
      trace.push({ array: [...array], active: [k], lcurr: l, rcurr: r });
    }
    while (j < arr2.length) {
      array[k++] = arr2[j++];
      trace.push({ array: [...array], active: [k], lcurr: l, rcurr: r });
    }
  };

  const runMerge = (array, l, r) => {
    if (r === l) return array;
    let m = Math.floor((l + r) / 2);
    if (r - l > 1) {
      runMerge(array, l, m);
      runMerge(array, m, r);
    }
    mergeHalves(l, m, r);
    console.log(l + " " + r);
  };

  runMerge(array, 0, array.length);

  for (let i = 0; i < array.length; i++) {
    trace.push({ array: [...array], active: [i], lcurr: -1, rcurr: -1 });
  }
  trace.push({ array: [...array], active: [], lcurr: -1, rcurr: -1 });

  console.log(trace);
  return trace;
};
