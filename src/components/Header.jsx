const Header = ({ resetArray, runSort }) => {
  return (
    <div className="header">
      <button onClick={() => resetArray()}>reset</button>
      <button onClick={() => runSort()}>run</button>
    </div>
  );
};

export default Header;
