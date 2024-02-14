import "../styles/styles.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="brand-container">
        <div id="brand">logo here</div>
        <div className="socials">
          <p>social</p>
          <p>social</p>
        </div>
      </div>
      <div className="routes-container">
        <ul className="routes">
          <li>about</li>
          <li>blog</li>
          <li>contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
