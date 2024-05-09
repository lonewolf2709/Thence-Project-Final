import React from 'react';
import { Link, useLocation,useNavigate} from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const renderRightContent = () => {
    switch (location.pathname) {
      case '/':
        return (
          <div className='navbar-right2'>
            <button className='navbut1'><p className='bt1' onClick={()=>{navigate('/login')}}>Get Projects</p></button>
            <button className='navbut2'><p className='bt2'>Onboard Talent</p></button>
          </div>
        );
      case '/login':
        return <button  onClick={()=>{navigate('/')}} className='close'><img src="./Close.png"></img></button>;
      case '/finish':
        return null;
      default:
        return null;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="./Frame 1261155216.png" alt="Brand" />
      </div>
      <div className="navbar-right">
        {renderRightContent()}
      </div>
    </nav>
  );
};

export default Navbar;
