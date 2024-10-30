import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function NavBar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar expand="lg"  className={scrolled ? "scrolled bg-lg-dark" : "bg-lg-dark" }>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                active === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActive("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                active === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActive("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                active === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActive("projects")}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              href="#contact"
              className={
                active === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActive("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon"> 
              <a href="https://www.linkedin.com/in/fawzy-mohamed-501610236/" target="_blank" rel="noreferrer" className="in">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Fawzy-uwk" target="_blank" rel="noreferrer" className="git">
                <img src={navIcon2} alt="" />
              </a>
                <a href="https://www.frontendmentor.io/profile/Fawzy-uwk" className="mentor" target="_blank" rel="noreferrer">
                  <img src={navIcon3} alt="" />
                </a>
            </div>

            <button className="vvd">
              <a href="#contact">Let’s Connect</a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
