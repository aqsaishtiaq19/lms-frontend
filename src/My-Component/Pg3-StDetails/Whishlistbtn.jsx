import React from 'react';
import styled from 'styled-components';

const WhishlistButton = () => {
  return (
    <StyledWrapper>
      <button>
        <div>
          <span>
            <p>My Courses</p><p>🎓</p>
          </span>
        </div>
        <div>
          <span>
            <p>Wish List</p><p>🛍️ </p>
          </span>
        </div>
      </button>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  button {
    margin: 20px auto;
    outline: 0;
    border: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 180px;
    height: 50px;

    border-radius: 0.5em;

    overflow: hidden;

    /* changed colors */
    box-shadow: 0 0.625em 1em 0 rgba(0, 0, 0, 0.35);

    cursor: pointer;
  }

  button div {
    transform: translateY(0px);
    width: 100%;
  }

  button,
  button div {
    transition: 0.6s cubic-bezier(.16,1,.3,1);
  }

  button div span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 50px;
    padding: 0.75em 1.125em;
  }

  /* black */
  button div:nth-child(1) {
    background-color: #585454;
  }

  /* grey */
  button div:nth-child(2) {
    background-color: #4b5563;
  }

  button:hover {
    box-shadow: 0 0.625em 1em 0 rgba(75, 85, 99, 0.35);
  }

  button:hover div {
    transform: translateY(-50px);
  }

  button p {
    font-size: 17px;
    font-weight: bold;
    color: #ffffff;
  }

  button:active {
    transform: scale(0.95);
  }

  /* responsive */
  @media (max-width: 480px) {
    button {
      max-width: 120px;
      height: 45px;
    }

    button div span {
      height: 45px;
      padding: 0.6em 1em;
    }

    button p {
      font-size: 15px;
    }
  }
`;

export default WhishlistButton;
