const Footer = ({ runSort }) => {
  return (
    <div className="footer">
      <div className="title-row">
        <div className="title t2">
          <div className="fore">Divide and Conquer</div>
          <div className="back">
            <div className="btn" onClick={() => runSort("merge")}>
              Merge Sort
            </div>
            <div className="btn" onClick={() => runSort("quick")}>
              Quick Sort
            </div>
          </div>
        </div>
        <div className="title t2">
          <div className="fore">Bubbling</div>
          <div className="back">
            <div className="btn" onClick={() => runSort("bubble")}>
              Bubble Sort
            </div>
            <div className="btn" onClick={() => runSort("cocktail")}>
              Cocktail Shaker
            </div>
          </div>
        </div>
        <div className="title t2">
          <div className="fore">Selection Sort</div>
          <div className="back">
            <div className="btn" onClick={() => runSort("selection-min")}>
              Min
            </div>
            <div className="btn" onClick={() => runSort("selection-max")}>
              Max
            </div>
          </div>
        </div>
        <div className="title t1">
          <div className="fore">Insertion Sort</div>
          <div className="back">
            <div className="btn" onClick={() => runSort("insertion")}>
              Insertion Sort
            </div>
          </div>
        </div>
        <div className="title t4">
          <div className="fore">Radix Sort</div>
          <div className="back">
            <div className="btn" onClick={() => runSort("radix-lsd-4")}>
              LSD 4
            </div>
            <div className="btn" onClick={() => runSort("radix-lsd-16")}>
              LSD 16
            </div>
            <div className="btn" onClick={() => runSort("radix-msd-4")}>
              MSD 4
            </div>
            <div className="btn" onClick={() => runSort("radix-msd-16")}>
              MSD 16
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
