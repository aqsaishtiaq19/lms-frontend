import React from 'react';
import styled from 'styled-components';

const SearchLearnInput = () => {
  return (
    <StyledWrapper>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="What do u wanna learn...."
          />

          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 0 24 24"
              width={24}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
        </div>

        <div className="glow" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 30px;

  .search-container {
    position: relative;
    width: 100%;
    max-width: 700px;
    padding: 0 20px;
  }

  .search-bar {
    position: relative;
    display: flex;
    align-items: center;

    width: 100%;

    padding: 12px 15px;
    border-radius: 12px;

    background-color: #5f5f5f;

    overflow: hidden;
    transition: all 0.3s ease;
  }

  .search-input {
    width: 100%;

    padding: 10px;

    border: none;
    outline: none;
    background: none;

    color: #fff;
    font-size: 18px;
  }

  .search-input::placeholder {
    color: #d1d1d1;
  }

  .search-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px;
    margin-left: 10px;

    border-radius: 50%;

    background-color: #3f3f3f;

    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .search-icon svg {
    fill: #fff;
  }

  .search-icon:hover {
    background-color: #2f2f2f;
  }

  .search-bar:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }

  .search-bar:focus-within {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
  }

  .glow {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 100%;
    height: 200%;

    border-radius: 100px;

    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1),
      transparent
    );

    transform: translate(-50%, -50%) scale(0);

    transition: all 0.5s ease;

    z-index: -1;
  }

  .search-bar:hover + .glow {
    transform: translate(-50%, -50%) scale(1);
  }

  .search-bar:focus-within + .glow {
    transform: translate(-50%, -50%) scale(1.2);

    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2),
      transparent
    );
  }

  @media (max-width: 768px) {
    .search-container {
      max-width: 95%;
    }

    .search-input {
      font-size: 16px;
    }

    .search-icon {
      padding: 10px;
    }
  }
`;

export default SearchLearnInput;