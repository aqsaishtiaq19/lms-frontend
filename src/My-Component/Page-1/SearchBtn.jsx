import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBtn = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <StyledWrapper>
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
          </g>
        </svg>

        <input
          placeholder="Search courses..."
          type="search"
          className="input"
          value={query}
          onChange={handleChange}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .group {
    display: flex;
    align-items: center;
    position: relative;
    max-width: 190px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .input {
    height: 40px;
    width: 100%;
    padding: 0 1rem 0 2.5rem;

    border: 2px solid #000;
    border-radius: 8px;

    background-color: #d3d3d3;   /* grey */
    color: #000;                /* black text */

    outline: none;
    transition: 0.3s ease;
  }

  .input::placeholder {
    color: #333;
  }

  .icon {
    position: absolute;
    left: 1rem;
    fill: #000;
    width: 1rem;
    height: 1rem;
  }

  .input:focus {
    box-shadow: 0 0 6px rgba(0,0,0,0.4);
  }
`;

export default SearchBtn;