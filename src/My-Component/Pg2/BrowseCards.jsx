import React from 'react';
import styled from 'styled-components';
import axios from "axios";
import { Link } from 'react-router-dom';

const BrowseCard = () => {
  const addToWishlist = async (courseId, e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      if (!courseId) {
        alert("Invalid course ID");
        return;
      }

      await axios.post(
        "https://lms-backend-production-ada7.up.railway.app/api/wishlist",
        { courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Added to Wishlist ❤️");
    } catch (error) {
      console.log("Wishlist Error:", error.response?.data);
      alert(error.response?.data?.message || "Failed to add wishlist");
    }
  };

  return (
    <StyledWrapper>
      <div className="grid">
        <div className="card">
          <Link className="card1" to="/Pg2">
            <h1>Web Development</h1>
            <p className="small">
              Learn frontend, backend, APIs, databases and build real full stack applications.
            </p>
            <div className="go-corner">
              <button
                className="wishlist-btn"
                onClick={(e) => addToWishlist("6a1f6660e12ad32b90bc1353", e)}
              >
                +
              </button>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="card1" to="/Pg2">
            <h1>Marketing</h1>
            <p className="small">
              Master SEO, social media marketing, paid ads and brand growth strategies.
            </p>
            <div className="go-corner">
              <button
                className="wishlist-btn"
                onClick={(e) => addToWishlist("6a21a131b8573c95ad5f51a4", e)}
              >
                +
              </button>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="card1" to="/Pg2">
            <h1>Music</h1>
            <p className="small">
              Learn music production, rhythm theory, instruments and audio creation basics.
            </p>
            <div className="go-corner">
              <button
                className="wishlist-btn"
                onClick={(e) => addToWishlist("6a21a8a7b8573c95ad5f51a6", e)}
              >
                +
              </button>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="card1" to="/Pg2">
            <h1>Fitness</h1>
            <p className="small">
              Build strength, endurance, health and structured workout training plans.
            </p>
            <div className="go-corner">
              <button
                className="wishlist-btn"
                onClick={(e) => addToWishlist("6a21a8c6b8573c95ad5f51a8", e)}
              >
                +
              </button>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="card1" to="/Pg2">
            <h1>IT & Software</h1>
            <p className="small">
              Learn programming, software engineering, system design and IT tools.
            </p>
            <div className="go-corner">
              <button
                className="wishlist-btn"
                onClick={(e) => addToWishlist("6a248b5070c2c0752bf4dfd1", e)}
              >
                +
              </button>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="card1" to="/Pg2">
            <h1>Design</h1>
            <p className="small">
              Learn UI/UX design, Figma, graphics and modern product design systems.
            </p>
            <div className="go-corner">
              <button
                className="wishlist-btn"
                onClick={(e) => addToWishlist("6a21a8c6b8573c95ad5f51a8", e)}
              >
                +
              </button>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="card1" to="/CoursesList">
            <h1>Development</h1>
            <p className="small">
              Frontend + backend development with real world project building experience.
            </p>
            <div className="go-corner">
              <button
                className="wishlist-btn"
                onClick={(e) => addToWishlist("6a21a8a7b8573c95ad5f51a6", e)}
              >
                +
              </button>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link className="card1" to="/Pg2">
            <h1>Business</h1>
            <p className="small">
              Learn entrepreneurship, management, leadership and business skills.
            </p>
            <div className="go-corner">
              <button
                className="wishlist-btn"
                onClick={(e) => addToWishlist("6a1f6660e12ad32b90bc1353", e)}
              >
                +
              </button>
            </div>
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
  }

  .card1 {
    display: block;
    position: relative;
    max-width: 300px;
    background: linear-gradient(145deg, #e6e6e6, #cfcfcf);
    border-radius: 10px;
    padding: 32px 24px;
    text-decoration: none;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    color: #000;
  }

  .card1 h1,
  .card1 p,
  .card1 h3,
  .card1 span {
    color: #000 !important;
  }

  .card1:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    top: 0;
    right: 0;
    background-color: #414242;
    border-radius: 0 4px 0 32px;
  }

  .wishlist-btn {
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default BrowseCard;

