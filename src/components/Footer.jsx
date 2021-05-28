const Footer = ({ setSize }) => {
  return (
    <div>
      <button onClick={() => setSize(8)}>8</button>
      <button onClick={() => setSize(16)}>16</button>
      <button onClick={() => setSize(32)}>32</button>
      <button onClick={() => setSize(64)}>64</button>
      <button onClick={() => setSize(128)}>128</button>
      <button onClick={() => setSize(256)}>256</button>
      <button onClick={() => setSize(512)}>512</button>
      <button onClick={() => setSize(1024)}>1024</button>
    </div>
  );
};

export default Footer;
