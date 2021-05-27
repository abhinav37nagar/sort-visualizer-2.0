import { useState, useEffect } from "react";

import Graph from "./components/Graph";
import Header from "./components/Header";

import { mergeSort } from "./algorithms/MergeSort";

function App() {
  const [size, setSize] = useState(64);
  const [data, setData] = useState({
    array: [],
    active: [],
  });

  useEffect(() => {
    resetArray();
  }, []);

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

  const runSort = () => {
    const trace = mergeSort(data.array);

    var offset = 0;

    for (let i = 0; i < trace.length; i++) {
      setTimeout(() => {
        run(i);
      }, offset);
      offset += 50;
    }

    const run = (i) => {
      console.log("run " + i);
      setData(trace[i]);
    };
  };

  return (
    <div className="App">
      <Header resetArray={resetArray} runSort={runSort} />
      <Graph {...data} />
    </div>
  );
}

export default App;
