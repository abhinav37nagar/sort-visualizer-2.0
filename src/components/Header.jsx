const Header = ({ resetArray, runSort }) => {
  return (
    <div className="header">
      <button onClick={() => resetArray()}>reset</button>
      <button onClick={() => runSort("merge")}>merge sort</button>
      <button onClick={() => runSort("bubble")}>bubble sort</button>
      <button onClick={() => runSort("insertion")}>insertion sort</button>
      <button onClick={() => runSort("selection-min")}>
        selection sort(min)
      </button>
      <button onClick={() => runSort("selection-max")}>
        selection sort(max)
      </button>
      <button onClick={() => runSort("quick")}>quick sort</button>
    </div>
  );
};

export default Header;
