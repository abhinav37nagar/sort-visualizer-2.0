import Bar from "./Bar";

const Graph = ({ array }) => {
  return (
    <div className="graph">
      {array.map((val, idx) => (
        <Bar key={idx} value={val} />
      ))}
    </div>
  );
};

export default Graph;
