const Header = ({ resetArray, runSort }) => {
  return (
    <div className="header">
      <button onClick={() => resetArray()}>reset</button>
      <button onClick={() => runSort("merge")}>merge sort</button>
      <button onClick={() => runSort("bubble")}>bubble sort</button>
      <button onClick={() => runSort("insertion")}>insertion sort</button>
      <button onClick={() => runSort("selection")}>selection sort</button>
    </div>
  );
};

export default Header;
