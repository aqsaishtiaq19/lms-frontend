import React from 'react';
import styled from 'styled-components';

const BrowserButton = () => {
  return (
    <StyledWrapper>
      <button className="Btn" color="black">
        <a href="/BrowseCards">
          Browse Courses
        </a>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .Btn {
    position: relative;
    margin-top: 50px;

    /* Responsive sizing */
    width: clamp(140px, 40vw, 180px);
    height: clamp(45px, 6vw, 55px);

    border-radius: 45px;
    border: none;

    background-color: rgb(133, 131, 137);
    color: white;

    box-shadow: 0px 10px 10px rgb(89, 84, 100) inset,
      0px 5px 10px rgba(5, 5, 5, 0.212),
      0px -10px 10px rgb(110, 109, 111) inset;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    /* remove fixed positioning issue */
    margin-left: auto;
    margin-right: auto;

    transition: transform 0.3s ease;
  }

  .Btn a {
    text-decoration: none;
    color: black; /* keeps text visible & clean */
    font-weight: 500;
  }

  .Btn::before {
    width: 70%;
    height: 2px;
    position: absolute;
    background-color: rgba(250, 250, 250, 0.678);
    content: "";
    filter: blur(1px);
    top: 7px;
    border-radius: 50%;
  }

  .Btn::after {
    width: 70%;
    height: 2px;
    position: absolute;
    background-color: rgba(250, 250, 250, 0.137);
    content: "";
    filter: blur(1px);
    bottom: 7px;
    border-radius: 50%;
  }

  .Btn:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% { transform: scale3d(1, 1, 1); }
    30% { transform: scale3d(1.25, 0.75, 1); }
    40% { transform: scale3d(0.75, 1.25, 1); }
    50% { transform: scale3d(1.15, 0.85, 1); }
    65% { transform: scale3d(0.95, 1.05, 1); }
    75% { transform: scale3d(1.05, 0.95, 1); }
    100% { transform: scale3d(1, 1, 1); }
  }

  /* 📱 Mobile tweaks */
  @media (max-width: 480px) {
    .Btn {
      width: 140px;
      height: 45px;
      font-size: 14px;
    }
  }
`;

export default BrowserButton;