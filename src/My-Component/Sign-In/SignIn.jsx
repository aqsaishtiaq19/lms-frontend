import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState("");

  const checkStrength = (pass) => {
    let score = 0;

    if (pass.length >= 6) score++;
    if (pass.match(/[A-Z]/)) score++;
    if (pass.match(/[0-9]/)) score++;
    if (pass.match(/[^A-Za-z0-9]/)) score++;

    if (score <= 1) return "Weak";
    if (score === 2 || score === 3) return "Medium";
    return "Strong";
  };

  const handleSubmit = () => {
    // Frontend validation FIRST!
    if (!firstName) {
      alert("First name is required!");
      return;
    }
    if (!lastName) {
      alert("Last name is required!");
      return;
    }
    if (!email) {
      alert("Email is required!");
      return;
    }
    if (!password) {
      alert("Password is required!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Only runs if all fields filled!
    axios
      .post("http://localhost:1919/api/register"
        , {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/courses");
      })
      .catch((err) => {
        // Show backend error to user!
    
        alert(err.response?.data?.message 
        || "Something went wrong")
      });
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="heading">Sign Up to your account</div>

        <form className="form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <div className="input-field">
            <input
              required
              autoComplete="off"
              type="text"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstname">First Name</label>
          </div>

          <div className="input-field">
            <input
              required
              autoComplete="off"
              type="text"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastname">Last Name</label>
          </div>

          <div className="input-field">
            <input
              required
              autoComplete="off"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>

          {/* PASSWORD FIELD WITH EYE ICON */}
          <div className="input-field password-wrapper">
            {password && (
              <p className={`strength ${strength.toLowerCase()}`}>
                Password Strength: {strength}
              </p>
            )}

            <input
              required
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setStrength(checkStrength(e.target.value));
              }}
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

            <label htmlFor="password">Password</label>
          </div>

          {/* CONFIRM PASSWORD FIELD */}
          <div className="input-field">
            <input
              required
              autoComplete="off"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>

          <div className="btn-container">
            
              <button className="btn" type="submit">
                Submit
              </button>
            
            <p className="signin">
              Already have an account?{" "}
              <Link to="/SignUp">
                <span>Sign In</span>
              </Link>
            </p>
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
  z-index: 50;

  border: solid 1px #8d8d8d;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;

  max-width: 400px;
  width: 90%;
}

.heading {
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: bolder;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.input-field {
  position: relative;
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

.input-field label {
  position: absolute;
  left: 15px;
  top: 10px;
  color: #8d8d8d;
  transition: 0.3s;
  pointer-events: none;
  background: white;
  padding: 0 5px;
}

.input-field input:focus ~ label,
.input-field input:not(:placeholder-shown) ~ label {
  transform: translateY(-20px) scale(0.85);
  color: #0c0d0e;
  font-weight: bold;
}

.password-wrapper {
  position: relative;
}

.eye-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
  font-size: 18px;
}

.eye-icon:hover {
  color: #000;
}

.strength {
  font-size: 12px;
  margin-top: 5px;
  font-weight: bold;
}

.strength.weak {
  color: red;
}

.strength.medium {
  color: orange;
}

.strength.strong {
  color: green;
}

.btn-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  padding: 10px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #a2a9c1, #bfc5cd);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.signin {
  font-size: 14px;
  text-align: center;
}

.signin span {
  color: #00bfff;
  cursor: pointer;
}

@media (max-width: 600px) {
  .container {
    width: 95%;
    padding: 15px;
  }
}
`;

export default SignInForm;