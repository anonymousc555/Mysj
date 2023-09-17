import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png'

export default function Header() {
  const [showNav, setShowNav] = useState(true);

  const navStatus = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <header>
              <div className="logo-section">
       <img src={Logo} alt="Logo" className='logo' />
      <h3>ALAIGBO <br /> Youth Summit</h3>
      </div>
<div className="menu">
  <ul style={{ display: !showNav && 'flex' }}>
    <li>
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li>
      <Link className="nav-link" to="/form">
	Buy Ticket
      </Link>
    </li>
  </ul>
  <Link className="menu-icon" onClick={navStatus}>
    =
  </Link>
</div>
</header>
</>
);
}
