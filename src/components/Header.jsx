const Header = ({ resetArray }) => {
  return (
    <div className="header">
      <button onClick={() => resetArray()}>reset</button>
    </div>
  );
};

export default Header;
