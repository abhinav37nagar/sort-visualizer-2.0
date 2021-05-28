const Header = ({
  resetArray,
  reverseArray,
  setSize,
  darkMode,
  setDarkMode,
}) => {
  return (
    <div className="header">
      <div className="title-row">
        <div className="title t1">
          <div className="fore">Operations</div>
          <div className="back">
            <div className="btn" onClick={() => resetArray()}>
              Shuffle
            </div>
            <div className="btn" onClick={() => reverseArray()}>
              Reverse
            </div>
          </div>
        </div>
        <div className="title t2">
          <div className="fore">Select Size</div>
          <div className="back">
            <div className="btn" onClick={() => setSize(8)}>
              8
            </div>
            <div className="btn" onClick={() => setSize(16)}>
              16
            </div>
            <div className="btn" onClick={() => setSize(32)}>
              32
            </div>
            <div className="btn" onClick={() => setSize(64)}>
              64
            </div>
            <div className="btn" onClick={() => setSize(128)}>
              128
            </div>
            <div className="btn" onClick={() => setSize(256)}>
              256
            </div>
            <div className="btn" onClick={() => setSize(512)}>
              512
            </div>
            <div className="btn" onClick={() => setSize(1024)}>
              1024
            </div>
          </div>
        </div>
        <div className="title t3">
          <div className="fore"> {darkMode ? "Dark" : "Light"}</div>
          <div className="back">
            <div className="btn" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Dark" : "Light"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
