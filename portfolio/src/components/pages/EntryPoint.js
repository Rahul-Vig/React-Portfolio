import React, { Component } from "react";
import backgroundImage from "../../media/entryPointBG.jpg";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import posed, { PoseGroup } from "react-pose";
import "./EntryPoint.css";

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
  height: "100%"
};

const quotes = {
  quote1: {
    text: "Truth is a pathless land",
    author: "Jiddu Krishnamurti"
  },

  quote2: {
    text: "Work on your own salvation. Do not depend on others",
    author: "Siddhartha Guatama"
  },

  quote3: {
    text:
      "The most valuable of all education is the ability to make yourself do the thing you have to do, when it has to be done, whether you like it or not",
    author: "Alduos Huxley"
  }
};

const keys = Object.keys(quotes);

const H1 = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      duration: 300
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

export default class EntryPoint extends Component {
  state = {
    count: 1,
    randQuote: quotes[keys[0]],
    isVisible: true
  };

  componentDidMount() {
    setInterval(() => {
      setTimeout(() => {
        this.setState({
          isVisible: true
        });
      }, 500);

      setTimeout(() => {
        this.setState({
          count: (this.state.count + 1) % keys.length,
          randQuote: quotes[keys[this.state.count]],
          isVisible: false
        });
      }, 9500);

      console.log(this.state.count);
    }, 10000);
  }
  render() {
    // this.changeQuote();
    const { isVisible } = this.state;
    return (
      <div style={background}>
        <div
          className="container"
          style={{
            textAlign: "center",
            width: "60%",
            position: "absolute",
            top: "10%",
            left: "4%"
          }}
        >
          {isVisible && (
            <H1 id="q">
              {`"${this.state.randQuote.text}"`}
              {" ~ "}
              {this.state.randQuote.author}
            </H1>
          )}
        </div>

        <Container
          className="text-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContext: "center",
            flexDirection: "column",
            height: "900px"
          }}
        >
          <Container className="HeadingAndButton">
            <Container>
              <Row>
                <Col>
                  <h1 className="display-1" style={{ fontSize: "110px" }}>
                    Rahul Vig
                  </h1>
                  <h2 className="mt-3 mb-3">Full-Stack Developer </h2>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col>
                  <AwesomeButton
                    href="/about"
                    type="primary"
                    size="large"
                    style={{ textDecoration: "none" }}
                  >
                    <h1> ENTER </h1>
                  </AwesomeButton>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </div>
    );
  }
}
