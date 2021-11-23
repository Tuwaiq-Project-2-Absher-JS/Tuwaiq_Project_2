import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Dashbord extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
           <Col md={3} style={{backgroundColor:'rosybrown'}}>
           <h6>1</h6>
           <h6>1</h6>
           <h6>1</h6>
           </Col>
           <Col>My Dashboard</Col>
            

          </Row>
        </Container>
        {/* <h6>My Dashbord</h6>
        <Container>
          <Row>
            <Col>
            <h6></h6>
            <h6>Authorization</h6>
            <h6>Absher Surveys</h6>
            </Col>
            <Col>2 of 2</Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}
