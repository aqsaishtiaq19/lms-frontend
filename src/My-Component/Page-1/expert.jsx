import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>

      <div className="card">
        <div className="main-content">
          <div className="header"></div>

          <p className="heading">Get Certificate</p>

          <div className="categories">
            <span><h1>Globally Recognized</h1></span>
            <span>Upgrade your skills and earn certificates that are valued worldwide</span>
          </div>
        </div>

        <div className="footer">
          Earn verified certificates after completing your courses successfully
        </div>
      </div>

      <div className="card">
        <div className="main-content">
          <div className="header"></div>

          <h1 className="heading">Expert Teachers</h1>

          <div className="categories">
            <span>Best Faculty</span>
            <span><h1>Professional Educators</h1>Learn from experienced industry experts and educators</span>
          </div>
        </div>

        <div className="footer">
          Learn from qualified teachers with real-world experience
        </div>
      </div>

      <div className="card">
        <div className="main-content">
          <div className="header"></div>

          <h1 className="heading">Easy Communication</h1>

          <div className="categories">
            <span>About Us</span>
           < br/>
            <span>Stay connected with instructors and get quick support whenever you need help</span>
          </div>
        </div>

        <div className="footer">
          We make learning simple, interactive, and accessible for everyone
        </div>
      </div>

    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 30px;
  flex-wrap: wrap;
  margin-left: 70px;

  .card {
    display: flex;
    width: 350px;
    height: 350px;
    padding: 20px;
    color: white;
    background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)) padding-box,
                linear-gradient(145deg, transparent 35%, #555555, #aaaaaa) border-box;

    border: 2px solid transparent;
    border-radius: 8px;
    flex-direction: column;
    cursor: pointer;
    transform-origin: right bottom;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover {
    rotate: 8deg;
  }
`;

export default Card;