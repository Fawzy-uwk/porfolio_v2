import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const data = ["Programmer", "Web Developer", "React Developer","Front-End Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(()=> {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  });
  const tick = () => {
    let i = loopNum % data.length;
    let fullText = data[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);
    if (isDeleting) setDelta((prev) => prev / 4);
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);

      setDelta(400);
      setLoopNum(loopNum + 1);
    }
  };
  return (
    <section className="banner" id="home">
      <Container className="container">
        <Row className="align-items-center g-2">
          <Col xs={12} md={6} xl={7} className="text px-sm-3">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portfolio 😊 </span>
                  <h1 className="">
                    {`Hi I'm Fawzy Mohamed`} <span className="txt-rotate"></span>
                    <br /> <span className="wrap">A {text}</span>
                  </h1>
                  <p className=" pl-sm-4">
                    I want to show you my react website portfolio ,I hope you
                    like it 😊{" "}
                  </p>
                  <a href="#contact" className="btn">
                    Lets Connect <ArrowRightCircle size={25} />{" "}
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} xl={5} md={6} className="image">
            <img src={headerImg} alt="banner img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
