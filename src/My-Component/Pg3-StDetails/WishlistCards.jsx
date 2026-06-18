import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from "axios";

const WishlistCards = () => {
  const [wishlist, setWishlist] = useState([]);
  const [animating, setAnimating] = useState(null);

  // 🔥 FETCH FROM BACKEND
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("https://lms-backend-production-ada7.up.railway.app/api/wishlist", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        
        const data = res.data?.wishlist || res.data || [];

        const cleaned = data.map(item => {
          let title = item.title;

          if (typeof title === "object" && title !== null) {
            title = title.title || title.name || "Untitled Course";
          }

          return {
            ...item,
            title
          };
        });

        setWishlist(cleaned);

      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };

    fetchWishlist();
  }, []);

  // 🔥 REMOVE FROM BACKEND + UI
  const handleRemove = async (id) => {
    setAnimating(id);

    try {
      await axios.delete(`https://lms-backend-production-ada7.up.railway.app/api/wishlist/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      setWishlist((prev) => prev.filter((item) => item._id !== id));

    } catch (error) {
      console.log(error.response?.data || error.message);
    }

    setAnimating(null);
  };

  return (
    <StyledWrapper>

      {(wishlist || []).map((item) => (
        <div
          className={`flip-card ${animating === item._id ? 'removing' : ''}`}
          key={item._id}
        >
          <div className="flip-card-inner">

            {/* FRONT */}
            <div className="flip-card-front">
              <button
                className="heart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(item._id);
                }}
              >
                ♥
              </button>

              {/* SAFE RENDER (NOW ALWAYS STRING) */}
              <h3 className="title">{item.title}</h3>

              <p>Saved Course</p>
            </div>

            {/* BACK */}
            <div className="flip-card-back">
              <h3 className="title">{item.title}</h3>

              <button
                className="remove-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(item._id);
                }}
              >
                Remove from Wishlist
              </button>
            </div>

          </div>
        </div>
      ))}

      {/* EMPTY STATE */}
      {(wishlist || []).length === 0 && (
        <EmptyState>
          <span>🤍</span>
          <p>Your wishlist is empty</p>
        </EmptyState>
      )}

    </StyledWrapper>
  );
};

export default WishlistCards;

/* ── Animations ── */
const popHeart = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.4); }
  100% { transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.85); }
`;

/* ── Styles ── */
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 190px);
  column-gap: 100px;
  row-gap: 60px;
  justify-content: center;
  padding: 20px;

  .flip-card {
    width: 250px;
    height: 254px;
    perspective: 1000px;
  }

  .flip-card.removing {
    animation: ${fadeOut} 0.35s ease forwards;
  }

  .flip-card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    color: #000;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .heart-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: none;
    background: coral;
    color: white;
    cursor: pointer;

    &:hover {
      animation: ${popHeart} 0.4s ease;
    }
  }

  .remove-btn {
    margin-top: 12px;
    padding: 8px 16px;
    border: none;
    border-radius: 20px;
    background: coral;
    color: white;
    cursor: pointer;
  }
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 0;

  span {
    font-size: 3rem;
  }

  p {
    color: #aaa;
    font-weight: 600;
  }
`;