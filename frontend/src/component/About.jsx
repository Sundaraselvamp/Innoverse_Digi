import React from "react";
import "../style/About.css";
import heroImage from "../images/about.png"; // Replace with your hero image
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import webhome4 from '../images/webhome4.webp'
import webhome2 from '../images/webhome2.webp'
import ScrollToTop from "./ScrollToTop";
function About() {

  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <ScrollToTop/>
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Full screen height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            Welcome to Innoverse Digital Solutions, your ultimate partner in
            achieving digital excellence.
          </p>
        </div>
      </section>
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a team of passionate professionals dedicated to delivering
          comprehensive and stress-free marketing solutions. Based in Chennai,
          we combine creativity, technical expertise, and a deep understanding
          of the digital landscape to empower businesses like yours.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Unique Selling Proposition</h2>
        <p>
          At Innoverse Digital Solutions, we don’t just offer services; we take
          the weight of marketing off your shoulders. Our end-to-end marketing
          solutions ensure that you can focus on other critical aspects of your
          business while we handle everything from strategy creation to
          execution and performance analysis.
        </p>
        <h3 style={{ marginTop: "20px" }}>What does this mean for you?</h3>
        <ul>
          <li>
            <strong>No Stress:</strong> We manage your marketing so you don’t
            have to.
          </li>
          <li>
            <strong>Seamless Experience:</strong> All your marketing needs
            covered under one roof.
          </li>
          <li>
            <strong>Focused Growth:</strong> You can dedicate time to expanding
            your operations and scaling your business while we grow your brand.
          </li>
        </ul>
      </section>
      <section className="about-section">
        <h2>What We Do</h2>
        <ul>
          <li>
            <strong>Web Development:</strong> Building stunning, responsive
            websites that captivate your audience and drive conversions.
          </li>
          <li>
            <strong>Digital Marketing:</strong> Crafting targeted campaigns,
            enhancing visibility, and delivering measurable results through
            SEO, social media, and more.
          </li>
          <li>
            <strong>Data Analytics:</strong> Turning raw data into actionable
            insights for smarter, growth-oriented decision-making.
          </li>
        </ul>
      </section>
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          <strong>Comprehensive Approach:</strong> From ideation to execution,
          we handle it all.
        </p>
        <p>
          <strong>Expertise You Can Trust:</strong> Our team of specialists
          ensures that every strategy is tailored to your goals.
        </p>
        <p>
          <strong>Stress-Free Marketing:</strong> We act as your dedicated
          marketing team, saving you time and effort.
        </p>
        <p>
          <strong>Customer-Centric:</strong> Your success is our success. We are
          committed to exceeding your expectations.
        </p>
      </section>
      
      <div className="mission-vision-wrapper">
            <div className="mission-section">
                <div className="mission-image">
                    <img src={webhome2} alt="Mission" />
                </div>
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>
                        To provide class leading end-to-end IT solutions, leveraging offerings 
                        from industry leaders such as IBM and Cisco, that enable our customers 
                        to achieve their business goals. At GBM we will always strive to provide 
                        exceptional value to our customers and will always be willing to go the 
                        extra mile for them. We will always employ great people and aspire to provide 
                        the best possible environment to innovate, grow and learn.
                    </p>
                </div>
            </div>

            <div className="vision-section">
                <div className="vision-content">
                    <h2>Our Vision</h2>
                    <p>
                        To be viewed by our customers as the partner with the most critical role 
                        for their future success. To become as fundamental to the future success 
                        of our customers as they are to ours.
                    </p>
                </div>
                <div className="vision-image">
                    <img src={webhome4} alt="Vision" />
                </div>
            </div>
        </div>


      {/* Call to Action Section */}
      <section className="about-section">
        <h2>Let Us Help You Grow!</h2>
        <p>
            Let us take the stress out of marketing so you can focus on building the business of your dreams. Contact us today and let’s grow together!
        </p>
        </section>
        <div className='wd_end'>
            <p>Let us help you transform your online presence and achieve real, measurable results with solutions that are as unique as your business. </p>
             <button onClick={()=>{navigate("/contact")}}>contact us</button>
        </div>
      <Footer />
    </div>
  );
}

export default About;
