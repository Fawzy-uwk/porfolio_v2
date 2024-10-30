import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import {
  BackAnimatedProgressBar,
  HtmlAnimatedProgressBar,
  CssAnimatedProgressBar,
  JsAnimatedProgressBar,
  BootAnimatedProgressBar,
  TailwindAnimatedProgressBar,
  SassAnimatedProgressBar,
  ReactAnimatedProgressBar,
  GitAnimatedProgressBar,
} from "./AnimatedProgress";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Skills() {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>skills</h2>
              <p>
                Here is some of my skills that I wand to introduce to you 😃{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <div>
                    <HtmlAnimatedProgressBar />
                  </div>
                  <h4>HTML</h4>
                </div>

                <div className="item">
                  <div>
                    <CssAnimatedProgressBar />
                  </div>
                  <h4>CSS</h4>
                </div>

                <div className="item">
                  <div>
                    <BootAnimatedProgressBar />
                  </div>
                  <h4>Bootstrap</h4>
                </div>

                <div className="item">
                  <div>
                    <TailwindAnimatedProgressBar />
                  </div>
                  <h4>Tailwind CSS</h4>
                </div>

                <div className="item">
                  <div>
                    <SassAnimatedProgressBar />
                  </div>
                  <h4>Sass</h4>
                </div>

                <div className="item">
                  <div>
                    <JsAnimatedProgressBar />
                  </div>
                  <h4>JavaScript</h4>
                </div>

                <div className="item">
                  <div>
                    <ReactAnimatedProgressBar />
                  </div>
                  <h4>React JS</h4>
                </div>

                <div className="item">
                  <div>
                    <BackAnimatedProgressBar />
                  </div>
                  <h4>PHP Laravel</h4>
                </div>

                <div className="item">
                  <div>
                    <GitAnimatedProgressBar />
                  </div>
                  <h4>Git&Github</h4>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="none" />
    </section>
  );
}

export default Skills;
