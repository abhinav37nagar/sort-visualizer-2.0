export const bubbleSort = (array) => {
  const trace = [];

  console.log(array);

  for (let k = array.length; k > 0; k--) {
    for (let i = 0; i < k; i++) {
      if (array[i] < array[i - 1]) {
        let temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
      }
      trace.push({
        array: [...array],
        active: [i - 1, i],
        lcurr: -1,
        rcurr: -1,
      });
    }
  }

  for (let i = 0; i < array.length; i++) {
    trace.push({ array: [...array], active: [i], lcurr: -1, rcurr: -1 });
  }
  trace.push({ array: [...array], active: [], lcurr: -1, rcurr: -1 });

  return trace;
};

export const cocktailSort = (array) => {
  const trace = [];

  console.log(array);

  var lo = 0,
    hi = array.length - 1;
  for (let k = array.length; k > 0; k--) {
    for (let i = lo; i <= hi; i++) {
      if (array[i] < array[i - 1]) {
        let temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
      }
      trace.push({
        array: [...array],
        active: [i - 1, i],
        lcurr: -1,
        rcurr: -1,
      });
    }
    hi--;
    for (let i = hi - 1; i >= lo; i--) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
      trace.push({
        array: [...array],
        active: [i - 1, i],
        lcurr: -1,
        rcurr: -1,
      });
    }
    lo++;
  }

  for (let i = 0; i < array.length; i++) {
    trace.push({ array: [...array], active: [i], lcurr: -1, rcurr: -1 });
  }
  trace.push({ array: [...array], active: [], lcurr: -1, rcurr: -1 });

  return trace;
};
