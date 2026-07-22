import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Css.Style/Pg1.Style.Css';
import Button from './Add-to-cart';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBtn from './SearchBtn';
import SignUpButton from '../SignUP/SignUpBtn';
import { Link as ScrollLink } from 'react-scroll';
import LogOutbtn from './LogOutbtn';
import logo from "../../images/Pg1/uni-logo.jpg";

function Header() {

  const navigate = useNavigate();

  const [token, setToken] = React.useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setToken(null);

    console.log("LOGOUT SUCCESS");
    navigate('/SignIn');
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="mainNavbar"
        style={{ justifyContent: "space-around" }}
      >
        <Container>

          <Navbar.Brand as={Link} to="/" className="logo-wrapper">
            <img
              src={logo}
              alt="Logo"
              className="navbar-logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">

            <Nav className="me-auto">

              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <NavDropdown title="Categories" id="categories-dropdown">
                <NavDropdown.Item as={Link} to="/Pg2">Information & Technology</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Pg2">Development</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Pg2">Photography</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Pg2">Arts & Humanities</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Courses" id="courses-dropdown">
                <NavDropdown.Item as={Link} to="/Pg2">List</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Pg2">Course Details</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Pg2">Course Elegibility</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Pg2">Offered Courses</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Students" id="students-dropdown">
                <NavDropdown.Item as={Link} to="/Student">Student Details</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Student">Trending</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Student">Wishlist</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#CardData">My Courses</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Contact Us" id="about-dropdown">
                <NavDropdown.Item as={ScrollLink} to="about" smooth={true} duration={2000}>
                  About Us
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/course-details">FAQ</NavDropdown.Item>
              </NavDropdown>

              <Button as={Link} to="./Add-to-cart" className="pay-btn">
                <a href="./Add-to-cart" className="btn-text">
                  Enroll Now
                </a>
              </Button>

              <br />
              <SignUpButton />
              <br />
              <SearchBtn />
              <br />

              {token ? (
                <div onClick={handleLogout}>
                  <LogOutbtn />
                </div>
              ) : null}

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 🌟 CLEAN HOVER + LOGO STYLING */}
      <style>
        {`
          .navbar-logo {
            width: 80px;
            height: auto;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .navbar-logo:hover {
            transform: scale(1.1) rotate(-2deg);
            filter: brightness(1.1);
          }

          .mainNavbar {
            transition: all 0.3s ease;
          }

          .mainNavbar:hover {
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          }

          .nav-link, .dropdown-item {
            transition: 0.3s ease;
          }

          .nav-link:hover, .dropdown-item:hover {
            color: #000 !important;
            transform: translateY(-2px);
          }
        `}
      </style>
    </>
  );
}

export default Header;