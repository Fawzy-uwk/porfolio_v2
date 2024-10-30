import { Col, Container, Nav, NavLink, Row, Tab } from "react-bootstrap";
import imgurl from "../assets/img/The_Wild_Oasis.png";
import imgurl2 from "../assets/img/Three-JS-Animation.png";
import imgurl3 from "../assets/img/The_React_Quiz.png";
import imgurl4 from "../assets/img/Fast-Pizza.png";
import imgurl5 from "../assets/img/Travel-List.png";
import imgurl6 from "../assets/img/UsePopcorn.png";
import imgurl7 from "../assets/img/URL-Shortner.png";
import imgurl8 from "../assets/img/todo-app.png";
import imgurl9 from "../assets/img/Rest-Countries.png";
import imgurl10 from "../assets/img/Frontend Mentor _ Interactive rating component - Google Chrome 12_14_2023 6_03_37 PM.png";
import imgurl11 from "../assets/img/Coffee - Google Chrome 12_14_2023 9_05_49 PM.png";
import imgurl12 from "../assets/img/WC-2022 - Google Chrome 12_16_2023 4_31_51 PM.png";
import imgurl13 from "../assets/img/Travel - Google Chrome 12_16_2023 4_34_44 PM.png";
import imgurl14 from "../assets/img/Home - Google Chrome 12_16_2023 4_38_41 PM.png";
import imgurl15 from "../assets/img/PRS.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ArrowRightCircle } from "react-bootstrap-icons";
const reactProjects = [
  {
    title: "The Wild Oasis",
    description:
      "A project with React JS with advanced features and with supabase DB server and styled components",
    image: imgurl,

    url: "https://the-wild-oasis2023.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/wild_oasis",
  },
  {
    title: "ThreeJs Animation",
    description:
      "A React JS (vite) project using ThreeJS library that provides good animations",
    image: imgurl2,
    url: "https://threejs-animation-4412fd.netlify.app",
    repo: "https://github.com/Fawzy-uwk/portfolio",
  },
  {
    title: "The React Quiz",
    description:
      "A local severs that has questions formed ito quiz using useReducer",
    image: imgurl3,
    url: "https://the-react-quiz-2023.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/react_quiz_reducers",
  },
  {
    title: "The Fast Pizza",
    description: "A React JS project with readux/toolkit and API ",
    image: imgurl4,
    url: "https://fast-pizza-1e49a6.netlify.app",
    repo: "https://github.com/Fawzy-uwk/16-fast-react-pizza",
  },
  {
    title: "Travel List",
    description:
      "A React Js Projects that provides some features as adding deleting sorting items",
    image: imgurl5,
    url: "https://travel-list-61727d.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/travel_List",
  },
  {
    title: "Use PopCorn",
    description:
      "A React Js Projects that fetches a movies API with some other features",
    image: imgurl6,
    url: "https://use-popcorn-2023.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/UsePopCorn",
  },
];

const mentorProjs = [
  {
    title: "URL Shortner",
    description:
      "A React Js Project with an api fetched to shorten the entered link and enable copying it",
    image: imgurl7,
    url: "https://url-shortner-b1e65e.netlify.app",
    repo: "https://github.com/Fawzy-uwk/url-shortener",
  },

  {
    title: "Todo App",
    description:
      "A React Js Project that add or remove sepecific tasks with light/dark mode",
    image: imgurl8,
    url: "https://todo-app-5439b0.netlify.app",
    repo: "https://github.com/Fawzy-uwk/todo-app-main",
  },

  {
    title: "Rest Countries",
    description:
      "A React Js Project that that fetches an api that display all countries with displaying every country detail and ligh/dark mode",
    image: imgurl9,
    url: "https://countries-api-4a1fa4.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/countries",
  },

  {
    title: "Interactive rating",
    description: "A simple HTML CSS JS challenge",
    image: imgurl10,
    url: "https://interactive-rating-55a7de.netlify.app",
    repo: "https://github.com/Fawzy-uwk/interactive-rating-component-main",
  },

  {
    title: "Paper,Rock,Scissors Game",
    description:
      "A React JS challenge for the popular game paper, rock, scissors ",
    image: imgurl15,
    url: "https://paper-rock-scissors-5a185b.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/paper_rock_scissors",
  },
];

const otherProjs = [
  {
    title: "Coffee Site",
    description:
      "A HTML CSS(pure) JS project as a simulation of coffee store website",
    image: imgurl11,
    url: "https://good-coffee-df4006.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/Coffee-site",
  },

  {
    title: "WC 2022",
    description:
      "A HTML CSS(with bootstrap) JS project as a simulation of sports website about Qatar World Cup 2022",
    image: imgurl12,
    url: "https://world-cup-86e09b.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/WC2022",
  },

  {
    title: "Travel Site",
    description:
      "A HTML CSS JS project as a simulation of a travel booking website",
    image: imgurl13,
    url: "https://travel-site-5e166d.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/Travel",
  },

  {
    title: "Hendami",
    description:
      "A Real-world website for a Qatari clothes brand with HTML CSS(with bootstrab) and Js with python(django) backend. I did the front-end with my team  ",
    image: imgurl14,
    url: "https://hindami.site/",
    repo: "https://github.com/tabana1/Hendami",
  },
];
function Projects() {
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Projects</h2>
                  <p>
                    Here is some of my projects the I am happy to introduce to
                    you 😅.
                  </p>
                  <Tab.Container id="tabs" defaultActiveKey="first">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="first">React Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Front-End Mentor Challanges
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row className="project">
                          {reactProjects.map((project) => (
                            <Col size={12} sm={6} md={4} key={project.title}>
                              <div className="proj-imgbx">
                                <img src={project.image} alt="project" />
                                <div className="proj-txtx">
                                  <h1 className="h4">{project.title}</h1>
                                  <span className="px-2">
                                    {project.description}
                                  </span>

                                  <div className="btns">
                                    <NavLink
                                      className="connect connect d-flex justify-content-between "
                                      target="_blank"
                                      href={project.url}
                                    >
                                      View Site <ArrowRightCircle size={25} />
                                    </NavLink>

                                    <NavLink
                                      className="connect d-flex align-items-center justify-content-between"
                                      target="_blank"
                                      href={project.url}
                                    >
                                      Repo Link <ArrowRightCircle size={25} />
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>

                    <Tab.Content>
                      <Tab.Pane eventKey="second">
                        <Row className="project">
                          {mentorProjs.map((project) => (
                            <Col size={12} sm={6} md={4} key={project.title}>
                              <div className="proj-imgbx">
                                <img src={project.image} alt="project" />
                                <div className="proj-txtx">
                                  <h1 className="h4">{project.title}</h1>
                                  <span className="px-2">
                                    {project.description}
                                  </span>

                                  <div className="btns">
                                    <NavLink
                                      className="connect connect d-flex justify-content-between "
                                      target="_blank"
                                      href={project.url}
                                    >
                                      View Site <ArrowRightCircle size={25} />
                                    </NavLink>

                                    <NavLink
                                      className="connect d-flex align-items-center justify-content-between"
                                      target="_blank"
                                      href={project.url}
                                    >
                                      Repo Link <ArrowRightCircle size={25} />
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>

                    <Tab.Content>
                      <Tab.Pane eventKey="third">
                        <Row className="project">
                          {otherProjs.map((project) => (
                            <Col size={12} sm={6} md={4} key={project.title}>
                              <div className="proj-imgbx">
                                <img src={project.image} alt="project" />
                                <div className="proj-txtx">
                                  <h1 className="h4">{project.title}</h1>
                                  <span className="px-2">
                                    {project.description}
                                  </span>

                                  <div className="btns">
                                    <NavLink
                                      className="connect connect d-flex justify-content-between "
                                      target="_blank"
                                      href={project.url}
                                    >
                                      View Site <ArrowRightCircle size={25} />
                                    </NavLink>

                                    <NavLink
                                      className="connect d-flex align-items-center justify-content-between"
                                      target="_blank"
                                      href={project.url}
                                    >
                                      Repo Link <ArrowRightCircle size={25} />
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="none"
        src={colorSharp2}
      ></img>
    </section>
  );
}

export default Projects;
