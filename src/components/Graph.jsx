import { useState, useEffect } from "react";

import Bar from "./Bar";

const Graph = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    var tempArray = Array(100).fill(null);
    tempArray = tempArray.map((val, idx) => idx + 1);
    for (var i = tempArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempVal = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = tempVal;
    }
    setArray(tempArray);
  };

  return (
    <div className="graph">
      {array.map((val, idx) => (
        <Bar key={idx} value={val} />
      ))}
    </div>
  );
};

export default Graph;
