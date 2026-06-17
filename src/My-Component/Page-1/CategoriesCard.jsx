import React from 'react';
import styled from 'styled-components';

const CategoriesCard = ({ search = "" }) => {

  const categories = [
    {
      title: "Business Study",
      courses: "12 Courses",
      desc: "Learn real-world business skills including management, entrepreneurship, and marketing strategies."
    },
    {
      title: "Art & Design",
      courses: "8 Courses",
      desc: "Explore creativity through graphic design, UI/UX, illustration, and modern digital art techniques."
    },
    {
      title: "Photography",
      courses: "10 Courses",
      desc: "Master photography skills including lighting, composition, editing, and professional camera techniques."
    },
    {
      title: "Web Development",
      courses: "15 Courses",
      desc: "Become a full-stack developer by learning HTML, CSS, JavaScript, React, Node.js, and databases."
    },
    {
      title: "Literature",
      courses: "15 Courses",
      desc: "Improve reading, writing, and critical thinking skills through classic and modern literature studies."
    },
    {
      title: "Humanities",
      courses: "15 Courses",
      desc: "Understand society, culture, history, and human behavior through structured academic learning."
    }
  ];

  const filtered = categories.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <StyledWrapper>
      <div className="parent">

        {filtered.map((item, index) => (
          <div className="card" key={index}>

            <div className="content-box">
              <span className="card-title">{item.title}</span>
              <h3>{item.courses}</h3>
              <p className="card-content">
                {item.desc}
              </p>
              <span className="see-more">See More</span>
            </div>

            <div className="date-box">
              <span className="month">Enroll</span>
              <br />
              <span className="date">Now</span>
            </div>

          </div>
        ))}

      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

  .parent {
    width: 100%;
    padding: 50px;
    perspective: 1000px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 80px;
  }

  .card {
    width: 100%;
    height: 420px; 
    margin: 0 auto;

    padding-top: 50px;
    border: 3px solid #222;
    transform-style: preserve-3d;
    background: linear-gradient(135deg,#0000 18.75%,#444 0 31.25%,#0000 0),
        repeating-linear-gradient(45deg,#444 -6.25% 6.25%,#222 0 18.75%);
    background-size: 60px 60px;
    background-color: #111;

    box-shadow: rgba(0, 0, 0, 0.6) 0px 30px 30px -10px;
    transition: all 0.5s ease-in-out;
    opacity: 0.95;
  }

  .card:hover {
    transform: rotate3d(0.5, 1, 0, 30deg) scale(1.03);
    opacity: 1;
  }

  .content-box {
    background: rgba(178, 176, 176, 0.75);
    transition: all 0.5s ease-in-out;
    padding: 70px 25px 25px 25px; /* bigger spacing */
  }

  .card-title {
    display: inline-block;
    color: #fff;
    font-size: 22px; /* increased */
    font-weight: 900;
  }

  .card-content {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 700;
    color: #ddd;
  }

  .see-more {
    cursor: pointer;
    margin-top: 1rem;
    display: inline-block;
    font-weight: 900;
    font-size: 10px;
    text-transform: uppercase;
    color: #ccc;
    background: #222;
    padding: 0.6rem 0.8rem;
  }

  .date-box {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 80px;   /* increased */
    width: 80px;    /* increased */
    background: #222;
    border: 1px solid #555;
    padding: 8px;
  }

  .month {
    color: #aaa;
    font-size: 10px;
    text-align: center;
  }

  .date {
    font-size: 26px;
    color: #eee;
    text-align: center;
  }

  /* 📱 Responsive */
  @media (max-width: 992px) {
    .parent {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .parent {
      grid-template-columns: 1fr;
    }
  }
`;

export default CategoriesCard;