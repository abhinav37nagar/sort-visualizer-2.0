export const bubbleSort = (array) => {
  const trace = [];

  console.log(array);

  let sorted = false;
  for (let k = array.length; k > 0; k--) {
    for (let i = 0; i < k; i++) {
      if (array[i] < array[i - 1]) {
        sorted = false;
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
