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
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="footer-bottom">
        <p>© 2024. All rights reserved.</p>
      </div>
      </div>
      <div className="footer-section contact">
      <h3 className='footer_head'>Services</h3>
        <p onClick={()=>{navigate('/web-development')}} style={{cursor:"pointer"}}>Web Development</p>
        <p onClick={()=>{navigate('/digital-marketing')}} style={{cursor:"pointer"}}>Digital Marketing</p>
        <p onClick={()=>{navigate('/data-analytics')}} style={{cursor:"pointer"}}>Data Analytics</p>
       
      </div>
      <div className="footer-section follow">
    <div >
    <h3 className='footer_head'>Contact</h3>
        <p>+91-9786343389</p>
        <p>info.innoversedigitals@gmail.com</p>
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
