import { useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [buttonText, setButtonText] = useState("Send");
  const ref = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending");
    emailjs
      .sendForm(
        "service_rxq1h7r",
        "template_ovd7vn6",
        ref.current,
        "gTSrVTENI5FuEJYVq"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent Successfully 🥰");
          ref.current.reset();
          setButtonText("Send");
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong 😞");
          setButtonText("Send");
        }
      );
  };
  return (
    <section className="contact" id="contact">
      <Toaster
        position="top-center"
        containerStyle={{ margin: "5px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "18px",
            width: "500px",
            padding: "16px 24px",
            color: "white",
            backgroundColor: "black",
            borderRadius: "8px",
          },
        }}
      />
      
      <Row>
        <Col md={6}>
          <img src={contactImg} alt="img" />
        </Col>
        <Col md={6}>
          <h2>Contact With Me</h2>
          <form ref={ref} onSubmit={handelSubmit}>
            <Row className="g-3">
              <Col sm={6} className="px-2 px-1 d-flex flex-column">
                <label htmlFor="name" className="mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  id="name"
                  name="name"
                />
              </Col>

              <Col sm={6} className="px-2 d-flex flex-column">
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  id="email"
                />
              </Col>

              <Col sm={6} className="px-2 d-flex flex-column">
                <label htmlFor="phone" className="mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  name="phone"
                  id="phone"
                />
              </Col>

              <Col sm={12} className=" px-2 d-flex flex-column ">
                <label htmlFor="message" className="mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  cols={10}
                  row={6}
                  placeholder="Your Message"
                  id="message"
                  name="message"
                />
              </Col>

              <Col sm={12} className="d-flex align-items-center flex-column ">
                <Button type="submit">
                  <span>{buttonText}</span>
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </section>
  );
}

export default Contact;
