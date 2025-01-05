import React from 'react';
import '../style/ClientFeedback.css';
import dp1 from '../images/dp1.jpg';
import dp2 from '../images/dp2.jpg';
const ClientFeedback = () => {
  return (
    <div className="feedback-section">
      <h2 className="home_heading">Client Feedback</h2>
      <p className="home_subheading">
        Discover how our digital services have transformed businesses. Hear directly from our satisfied clients and their success stories.
      </p>
      <div className="feedback-container">
        <div className="feedback-card">
          <div className="stars">★★★★★</div>
          <p className="feedback-text">
            The web development team delivered exceptional results, enhancing our business visibility and increasing sales through targeted digital marketing strategies and analytics. Highly recommend their services!
          </p>
          <div className="client-info">
            <img
              src={dp1}
              alt="Priya Nair"
              className="client-photo"
            />
            <div>
              <h4 className="client-name">Priya Nair</h4>
              <p className="client-location">Chennai</p>
            </div>
          </div>
        </div>
        <div className="feedback-card">
          <div className="stars">★★★★★</div>
          <p className="feedback-text">
            Innoverse Digital Solutions transformed our online presence with their amazing work!
          </p>
          <div className="client-info">
            <img
              src={dp2}
              alt="Suresh Kumar"
              className="client-photo"
            />
            <div>
              <h4 className="client-name">Suresh Kumar</h4>
              <p className="client-location">Coimbatore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
