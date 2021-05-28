import { useState, useEffect } from "react";

import Graph from "./components/Graph";
import Header from "./components/Header";

import { mergeSort } from "./algorithms/MergeSort";
import { bubbleSort, cocktailSort } from "./algorithms/BubbleSort";
import { insertionSort } from "./algorithms/InsertionSort";
import { selectionSortMin, selectionSortMax } from "./algorithms/SelectionSort";
import { quickSort } from "./algorithms/QuickSort";
import { radixSortLsd, radixSortMsd } from "./algorithms/RadixSort";
import Footer from "./components/Footer";

function App() {
  const [size, setSize] = useState(128);
  const [data, setData] = useState({
    array: [],
    active: [],
  });

  const resetArray = () => {
    var tempArray = Array(size).fill(null);
    tempArray = tempArray.map((val, idx) => idx + 1);
    for (var i = tempArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempVal = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = tempVal;
    }
    setData({ array: tempArray, active: [] });
  };

  useEffect(() => {
    resetArray();
  }, [size]);

  const reverseArray = () => {
    var tempArray = Array(size).fill(null);
    tempArray = tempArray.map((val, idx) => tempArray.length - idx);
    setData({ array: tempArray, active: [] });
  };

  const runSort = (id) => {
    var trace = [
      {
        array: [],
        active: [],
      },
    ];
    var increment = 0;

    if (id === "merge") {
      trace = mergeSort(data.array);
    }
    if (id === "bubble") {
      trace = bubbleSort(data.array);
    }
    if (id === "cocktail") {
      trace = cocktailSort(data.array);
    }
    if (id === "insertion") {
      trace = insertionSort(data.array);
    }
    if (id === "selection-min") {
      trace = selectionSortMin(data.array);
    }
    if (id === "selection-max") {
      trace = selectionSortMax(data.array);
    }
    if (id === "quick") {
      trace = quickSort(data.array);
    }
    if (id === "radix-lsd-4") {
      trace = radixSortLsd(data.array, 4);
    }
    if (id === "radix-lsd-16") {
      trace = radixSortLsd(data.array, 16);
    }
    if (id === "radix-msd-4") {
      trace = radixSortMsd(data.array, 4);
    }
    if (id === "radix-msd-16") {
      trace = radixSortMsd(data.array, 16);
    }
    increment = 10000 / trace.length;
    increment = 0;

    var offset = 0;

    for (let i = 0; i < trace.length; i++) {
      setTimeout(() => {
        run(i);
      }, offset);
      offset += increment;
    }

    const run = (i) => {
      setData(trace[i]);
    };
  };

  const testing = () => {
    clearTimeout();
  };

  return (
    <div className="App">
      <Header
        resetArray={resetArray}
        reverseArray={reverseArray}
        setSize={setSize}
      />
      <Graph {...data} />
      <Footer runSort={runSort} />
    </div>
  );
}

export default App;
