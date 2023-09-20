import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png'

export default function Header() {
  const [showNav, setShowNav] = useState(true);

  const navStatus = () => {
    setShowNav(!showNav);
  };

  const style = {textDecoration: "none", color: "#333"}

  return (
    <>
      <header>
        {/* <Link to="/" className='logo'> */}
              <div className="logo-section">
                <Link to="/"><img src={Logo} alt="Logo" className='logo' /></Link>
                <Link style={style} to="/"><h3>ALAIGBO <br /> Youth Summit</h3></Link>
      
      </div>
        {/* </Link> */}
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
