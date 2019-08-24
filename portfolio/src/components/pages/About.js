import React, { Component } from "react";
import backgroundImage from "../../media/aboutBG.jpg";
import me from "../../media/me.jpg";
import { Navbar, Nav, Container, Row, Col, Card, Image } from "react-bootstrap";
import "./About.css";

const background = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "fixed",
  padding: "0",
  margin: "0",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  fontFamily: "Open Sans"
};

export class About extends Component {
  render() {
    return (
      <div style={background}>
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ margin: "auto" }}>
              <Nav.Link href="/about">
                {" "}
                <h2 className="active">ABOUT</h2>
              </Nav.Link>
              <Nav.Link href="/portfolio">
                <h2>PORTFOLIO</h2>
              </Nav.Link>
              <Nav.Link href="/skills">
                <h2>SKILLS</h2>
              </Nav.Link>
              <Nav.Link href="/connect">
                <h2>CONNECT</h2>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container className="about" style={{ marginTop: "5%" }}>
          <Row>
            <Col>
              <Image src={me} fluid roundedCircle />
            </Col>

            <Col className="m-auto">
              {" "}
              <p>
                Having just earned my bachelor’s degree in Computer Science and
                completed a Full-Stack program at Columbia University, I am now
                looking for full-time opportunities as a Full-Stack Developer. I
                have demonstrated proficiency in the development of applications
                using various programming languages such as C++, Java, and
                JavaScript. I have also gained a strong understanding of various
                web-technologies, front-end development tools, back-end
                development tools, middle-ware technology and database systems.
              </p>
              <p>
                On my path, I have found an increasing affinity to spend more
                time honing my skills as a Full-Stack Programmer. Hence, the
                decision to pursue a career as one. My past experience
                developing Full-Stack applications has shown me the way Database
                Systems, Client-Server paradigms, Client-Server technologies,
                and middle-ware technology work together in harmony to create
                complex, usable software.{" "}
              </p>
              <p>
                I am in search of an opportunity that will consistently
                challenge me and my abilities as a developer, an opportunity
                that surrounds me with motivated, inspired individuals, and an
                opportunity that cultivates an environment that encourages its
                employees to learn, listen, innovate and grow together.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
