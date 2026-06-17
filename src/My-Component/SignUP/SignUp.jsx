import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import API from "../Api";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login", {
        email: email.trim(),
        password: password.trim(),
      });

      // store token
      localStorage.setItem("token", res.data.token);

      console.log("Login Success:", res.data);
      alert("Login Successful");

      // redirect after successful login
      navigate("CategoriesComponent /");

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Login Failed");
    }
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="heading">Sign In to your account</div>

        <form className="form" onSubmit={handleLogin}>
          <div className="input-field">
            <input
              required
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field">
            <input
              required
              autoComplete="off"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="btn-container">
           
            <button className="btn" type="submit">
              Submit
            </button>

            <div className="acc-text">
              New here ?
              <br />
              <Link to="/SignIn">
                <span
                  style={{
                    color: "#080808",
                    cursor: "pointer",
                    background: "grey",
                  }}
                >
                  Create Account
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;

    border: solid 1px #8d8d8d;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;

    max-width: 400px;
    width: 100%;
  }

  .container .heading {
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: bolder;
    text-align: center;
  }

  .form {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form .btn-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .form .btn {
    padding: 10px 20px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    border-radius: 10px;
    border: none;
    background: coral;
    color: #fff;
    font-weight: bolder;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .form .btn:hover {
    background: #646161;
  }

  .form .btn:active {
    transform: scale(0.995);
  }

  .input-field {
    position: relative;
  }

  .input-field label {
    position: absolute;
    color: #8d8d8d;
    pointer-events: none;
    left: 15px;
    transform: translateY(0.6rem);
    transition: all 0.3s ease;
  }

  .input-field input {
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 8px;
    border: solid 1px #8d8d8d;
    width: 100%;
  }

  .input-field input:focus {
    outline: none;
    border: solid 1px #47484b;
  }

  .input-field input:focus ~ label,
  .input-field input:not(:placeholder-shown) ~ label {
    transform: translateY(-51%) translateX(-10px) scale(0.8);
    background-color: #fff;
    padding: 0px 5px;
    color: #0c0d0e;
    font-weight: bold;
    border-radius: 100px;
  }

  @media (max-width: 600px) {
    .container {
      width: 95%;
      padding: 15px;
    }

    .form {
      max-width: 100%;
    }

    .form .btn-container {
      flex-direction: column;
      align-items: stretch;
    }
  }
`;

export default SignUpForm;