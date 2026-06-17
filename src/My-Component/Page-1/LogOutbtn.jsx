import React from 'react';
import styled from 'styled-components';

const LogOutbtn = () => {
  return (
    <StyledWrapper>
      <button className="btn-12">
        <span>Log Out</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-12,
  .btn-12 *,
  .btn-12:after,
  .btn-12:before,
  .btn-12 *:after,
  .btn-12 *:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-12 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #000;
    background-image: none;
    color: #fff;
    cursor: pointer;

    width: fit-content;
    min-width: 120px;
    height: auto;
    min-height: 40px;
    margin-top: 10px;

    font-size: 100%;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;

    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);

    padding: 0.8rem 3rem;
    text-transform: capitalize;

    border-radius: 99rem;
    border-width: 2px;
    overflow: hidden;
    position: relative;
  }

  .btn-12:disabled {
    cursor: default;
  }

  .btn-12:-moz-focusring {
    outline: auto;
  }

  .btn-12 svg {
    display: block;
    vertical-align: middle;
  }

  .btn-12 [hidden] {
    display: none;
  }

  .btn-12 span {
    mix-blend-mode: difference;
    white-space: nowrap;
  }

  .btn-12:after,
  .btn-12:before {
    background: linear-gradient(
      90deg,
      #fff 25%,
      transparent 0,
      transparent 50%,
      #fff 0,
      #fff 75%,
      transparent 0
    );

    content: "";
    inset: 0;
    position: absolute;
    transform: translateY(var(--progress, 100%));
    transition: transform 0.2s ease;
  }

  .btn-12:after {
    --progress: -100%;
    background: linear-gradient(
      90deg,
      transparent 0,
      transparent 25%,
      #fff 0,
      #fff 50%,
      transparent 0,
      transparent 75%,
      #fff 0
    );
    z-index: -1;
  }

  .btn-12:hover:after,
  .btn-12:hover:before {
    --progress: 0;
  }

  /* Tablet */
  @media (max-width: 768px) {
    .btn-12 {
      min-width: 100px;
      padding: 0.7rem 1.8rem;
      font-size: 0.9rem;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    .btn-12 {
      min-width: 90px;
      padding: 0.6rem 1.2rem;
      font-size: 0.85rem;
    }
  }
`;

export default LogOutbtn;