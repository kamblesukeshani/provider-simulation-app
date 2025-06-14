import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div><strong>Learning Support Directory</strong></div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/providers">Providers</Link>
      </nav>
    </header>
  );
}

export default Navbar;
