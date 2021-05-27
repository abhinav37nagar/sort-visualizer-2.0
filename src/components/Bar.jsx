const Bar = ({ value, size, active, current, sorted }) => {
  let className = "bar";
  if (current) className += " current";
  if (active) className += " active";
  if (sorted) className += " sorted";
  return (
    <div
      className={className}
      style={{ height: `${(100 * value) / size}%` }}
    ></div>
  );
};

export default Bar;
