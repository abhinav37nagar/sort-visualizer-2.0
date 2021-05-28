const Header = ({ resetArray, runSort }) => {
  return (
    <div className="header">
      <button onClick={() => resetArray()}>reset</button>
      <button onClick={() => runSort("merge")}>merge sort</button>
      <button onClick={() => runSort("bubble")}>bubble sort</button>
      <button onClick={() => runSort("cocktail")}>cocktail shaker sort</button>
      <button onClick={() => runSort("insertion")}>insertion sort</button>
      <button onClick={() => runSort("selection-min")}>
        selection sort(min)
      </button>
      <button onClick={() => runSort("selection-max")}>
        selection sort(max)
      </button>
      <button onClick={() => runSort("quick")}>quick sort</button>
      <button onClick={() => runSort("radix-lsd-4")}>
        radix sort(lsd) base 4
      </button>
      <button onClick={() => runSort("radix-lsd-16")}>
        radix sort(lsd) base 16
      </button>
      <button onClick={() => runSort("radix-msd-4")}>
        radix sort(msd) base 4
      </button>
      <button onClick={() => runSort("radix-msd-16")}>
        radix sort(msd) base 16
      </button>
    </div>
  );
};

export default Header;
