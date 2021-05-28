export const radixSortLsd = (array, base) => {
  const trace = [];
  console.log(array);
  for (let k = base; k <= base * array.length; k *= base) {
    const aux = [...array];
    aux.sort((a, b) => ((a - 1) % k) - ((b - 1) % k));
    for (let i = 0; i < array.length; i++) {
      array[i] = aux[i];
      trace.push({ array: [...array], active: [i], lcurr: -1, rcurr: -1 });
    }
  }

  trace.push({ array: [...array], active: [], lcurr: -1, rcurr: -1 });

  console.log(trace);
  return trace;
};

export const radixSortMsd = (array, base) => {
  const trace = [];
  console.log(array);
  var hi = 1;
  while (hi < array.length) hi *= base;
  for (let k = hi; k >= 1; k /= base) {
    const aux = [...array];
    aux.sort((a, b) => Math.floor((a - 1) / k) - Math.floor((b - 1) / k));
    for (let i = 0; i < array.length; i++) {
      array[i] = aux[i];
      trace.push({ array: [...array], active: [i], lcurr: -1, rcurr: -1 });
    }
  }

  trace.push({ array: [...array], active: [], lcurr: -1, rcurr: -1 });

  console.log(trace);
  return trace;
};
