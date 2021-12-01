import React from "react";
import logo from "../img/abshir.jpg";
import logo2 from "../img/2030.jpg";
import logo3 from "../img/saudi.jpg";
import { Row, Col, Navbar, Container,} from "react-bootstrap";
import "./style.css";

export default function HomeNav() {
  return (
    <div >
      <div class=" item1 border">
        <Navbar sticky="top">
          <Container>
            <Container style={{ marginTop: "15px" }}>
              <Row>
                <Col sm>
                  <Row style={{ marginTop: "10px" }}>
                    <Col sm>
                      <img
                        src={logo}
                        style={{ marginLeft: "78px" }}
                        alt="Abshir Image "
                        height="90px"
                      ></img>
                    </Col>
                    <div className="item2" />
                    <Col sm>
                      <img
                        src={logo2}
                        style={{ marginRight: "210px" }}
                        alt="2030"
                      ></img>
                    </Col>
                  </Row>
                </Col>

                <Col sm>
                  <img
                    src={logo3}
                    style={{
                      marginLeft: "170px",
                      width: "100px",
                      paddingTop: "20px",
                    }}
                    alt="2030"
                  ></img>
                </Col>
              </Row>
            </Container>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
