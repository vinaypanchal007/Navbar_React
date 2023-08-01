import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'
import { useState } from 'react';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to='/'>Logo</Link>
      <ul className={active}>
        <li className="nav__item">
        <Link to='/'>Home</Link>
        </li>
        <li className="nav__item">
        <Link to='/Menu'>Menu</Link>
        </li>
        <li className="nav__item">
        <Link to='/Contact'>Contact</Link>
        </li>
        <li className="nav__item">
        <Link to='/About'>About</Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar
