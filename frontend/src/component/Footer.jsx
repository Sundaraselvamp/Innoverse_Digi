import React from 'react';
import '../style/Footer.css'
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate =useNavigate()
  return (
    <footer className="footer">
      <div className="footer-section services">
        <img src={logo} alt="" />
        <p>
          Empowering businesses with tailored digital solutions to meet their
          unique needs and achieve online success.
        </p> 
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61570559792944" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/innoverse_digital_solutions/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/innoverse-digital-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="footer-bottom">
        <p>© 2024. All rights reserved.</p>
      </div>
      </div>
      <div className="footer-section contact">
      <h3 className='footer_head'>Services</h3>
        <p onClick={()=>{navigate('/')}} style={{cursor:"pointer"}}>Home</p>
        <p onClick={()=>{navigate('/about')}} style={{cursor:"pointer"}}>About</p>
        <p onClick={()=>{navigate('/web-development')}} style={{cursor:"pointer"}}>Web Development</p>
        <p onClick={()=>{navigate('/digital-marketing')}} style={{cursor:"pointer"}}>Digital Marketing</p>
        <p onClick={()=>{navigate('/data-analytics')}} style={{cursor:"pointer"}}>Data Analytics</p>
        <p onClick={()=>{navigate('/contact')}} style={{cursor:"pointer"}}>Contact</p>
       
      </div>
      <div className="footer-section follow">
    <div >
    <h3 className='footer_head'>Contact</h3>
        <p>+91-9786343389</p>
        <p>info@innoversedigital.in</p>
    </div>
        <h3 className='footer_head' style={{marginTop:"2rem"}} >Follow</h3>
        <input
          type="email"
          className="email-input"
          placeholder="Your email for contact"
        />
        <button className="submit-button">Submit your information now</button>
      </div>
    
    </footer>
  );
};

export default Footer;
