import Bar from "./Bar";

const Graph = ({ array, active, lcurr, rcurr }) => {
  return (
    <div className="graph">
      {array.map((val, idx) => (
        <Bar
          key={idx}
          value={val}
          size={array.length}
          active={active.includes(idx)}
          current={lcurr <= idx && idx < rcurr}
          sorted={val === idx + 1}
        />
      ))}
    </div>
  );
};

export default Graph;
