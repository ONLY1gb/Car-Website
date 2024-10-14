import './Navbar.css'
import { useState } from 'react';



const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='nav'>
        
        <div className='nav-logo'>My-Car</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li 
              className='nav-contact' 
              onMouseEnter={handleDropdownToggle} 
              onMouseLeave={handleDropdownToggle}
            >
              Contact
              {dropdownOpen && (
                <ul className='dropdown'>
                  <a href='mailto:gautam.bhawsar8269@gmail.com'><li>Email Us</li></a>
                  <a href='tel: 8269605224'><li>Call Us</li></a>
                  
                </ul>
              )}
            </li>
        </ul>
    </div>
  )
}

export default Navbar;
