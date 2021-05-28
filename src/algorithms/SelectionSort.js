export const selectionSortMin = (array) => {
  const trace = [];

  console.log(array);

  for (let p = 0; p < array.length; p++) {
    let k = -1;
    let min = array.length;
    for (let i = p; i < array.length; i++) {
      trace.push({ array: [...array], active: [i], lcurr: k, rcurr: k + 1 });
      if (array[i] < min) {
        min = array[i];
        k = i;
      }
    }
    while (array[k] < array[k - 1] && k > 0) {
      let temp = array[k];
      array[k] = array[k - 1];
      array[k - 1] = temp;
      k--;
      trace.push({
        array: [...array],
        active: [k],
        lcurr: 0,
        rcurr: p,
      });
    }
  }

  for (let i = 0; i < array.length; i++) {
    trace.push({ array: [...array], active: [i], lcurr: -1, rcurr: -1 });
  }
  trace.push({ array: [...array], active: [], lcurr: -1, rcurr: -1 });

  return trace;
};

export const selectionSortMax = (array) => {
  const trace = [];

  console.log(array);

  for (let p = 0; p < array.length; p++) {
    let k = -1;
    let max = -1;
    for (let i = 0; i < array.length - p; i++) {
      trace.push({ array: [...array], active: [i], lcurr: k, rcurr: k + 1 });
      if (array[i] > max) {
        max = array[i];
        k = i;
      }
    }
    while (array[k] > array[k + 1] && k + 1 < array.length) {
      let temp = array[k];
      array[k] = array[k + 1];
      array[k + 1] = temp;
      k++;
      trace.push({
        array: [...array],
        active: [k],
        lcurr: 0,
        rcurr: p,
      });
    }
  }

  for (let i = 0; i < array.length; i++) {
    trace.push({ array: [...array], active: [i], lcurr: -1, rcurr: -1 });
  }
  trace.push({ array: [...array], active: [], lcurr: -1, rcurr: -1 });

  return trace;
};
