import React, { useState,useEffect } from 'react'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { useMyContext } from '../context/MyContext'
function Navbar() {
    const { isScrolled,setSelected,selected } =useMyContext()
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    function handleHome(val){
        setSelected(val)
    }
    console.log(selected)
    const [isBelow480px, setIsBelow480px] = useState(window.innerWidth < 480);

    useEffect(() => {
      const handleResize = () => {
        setIsBelow480px(window.innerWidth < 480);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className={`nav_main ${isScrolled}`}>
      
      {isBelow480px?(
        <div className='mobile_nav_main'>
        {/* Logo and Menu Button */}
        <div className='mobile_nav_top'>
            <div className='mobile_nav_logo'>
                <img src={logo} alt="Logo" />
            </div>
            <button className='menu_button' onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'}
            </button>
        </div>

        {menuOpen && (
            <div className='mobile_nav_menu'>
                <Link style={{textDecoration:"none"}} to="/" onClick={() => setMenuOpen(false)}>
                    <div className='mobile_nav_item'>Home</div>
                </Link>
                <Link  style={{textDecoration:"none"}} to="/about" onClick={() => setMenuOpen(false)}>
                    <div className='mobile_nav_item'>About</div>
                </Link>
                <Link  style={{textDecoration:"none"}} to="/web-development" onClick={() => setMenuOpen(false)}>
                    <div className='mobile_nav_item'>Web Development</div>
                </Link>
                <Link  style={{textDecoration:"none"}} to="/digital-marketing" onClick={() => setMenuOpen(false)}>
                    <div className='mobile_nav_item'>Digital Marketing</div>
                </Link>
                <Link  style={{textDecoration:"none"}} to="/data-analytics" onClick={() => setMenuOpen(false)}>
                    <div className='mobile_nav_item'>Data Analytics</div>
                </Link>
                <Link  style={{textDecoration:"none"}} to="/contact" onClick={() => setMenuOpen(false)}>
                    <div className='mobile_nav_item'>Contact</div>
                </Link>
            </div>
        )}
    </div>
      ):(
        <div className='nav_con'>
        <div className='nav_con0' >
         <img src={logo} alt="" />
        </div>
        <div className='nav_con2'>
        <Link to="/" smooth={true} duration={500}>
         <div onClick={()=>handleHome('home')} className={`nav_con1 ${selected=='home'?'home':""}`}>Home</div>
         </Link>
         <Link to="/about" smooth={true} duration={500}>
         <div onClick={()=>handleHome('about')} className={`nav_con1 ${selected=='about'?'about':""}`}>About</div>
         </Link>
         <Link to="/web-development" smooth={true} duration={500}>
         <div onClick={()=>handleHome('web')} className={`nav_con1 ${selected=='web'?'web':""}`}>Web Development</div>
         </Link>
         <Link to="/digital-marketing" smooth={true} duration={500}>
         <div onClick={()=>handleHome('digital')} className={`nav_con1 ${selected=='digital'?'digital':""}`}>digital Marketing</div>
         </Link>
   
         <Link to="/data-analytics" smooth={true} duration={500}>
         <div onClick={()=>handleHome('data')} className={`nav_con1 ${selected=='data'?'data':""}`}>Data analytics</div>
         </Link>
      
         <Link to="/contact" smooth={true} duration={500}>
         <div onClick={()=>handleHome('contact')} className={`nav_con1 ${selected=='contact'?'contact':""}`}>Contact</div>
         </Link>
        </div>
          </div>
      )}
      
    </div>
  )
}

export default Navbar