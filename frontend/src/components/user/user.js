import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Footer from "../Footer/Footer";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Header from "../Header/Header";
export default function User() {
  const { state } = useLocation();
  const [data, setData] = useState([]);
  const uId = state.id;
  console.log(uId);
  useEffect(() => {
    axios({
      method: "post",
      url: "/user/",
      data: {
        id: uId,
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  console.log(data);

  return (
    <div>
      <div class="grid-container">
        <div class="grid-item item1">
          <Header />
        </div>
         {" "}
        <div class="grid-item item2" style={{ height: "500px" }}>
          <h4>Electronic Servcies</h4>
          <hr />
          <h4>Authorization</h4>
          <hr />
          <h4>Absher Surveys</h4>
          <hr />
        </div>
          
        <div class="  item3">
          <Col style={{ width: "100%" }}>
            <Card id="infoCard" style={{ width: "1000px" }}>
              <Card.Header>Personal Information</Card.Header>
              <Card.Body>
                <Card id="infoCard2">
                  <Card.Header>Personal Information</Card.Header>
                  <Card.Body>
                    <Row>
                      <Col> Nationa ID: {data.nationalID}</Col>
                    </Row>
                    <Row>
                      <Col> Name: {data.name}</Col>
                    </Row>
                    <Row>
                      <Col> Brith City: {data.birthCity}</Col>
                    </Row>
                    <Row>
                      <Col>Email: {data.email}</Col>
                    </Row>
                    <Row>
                      <Col>Tell: {data.tell}</Col>
                    </Row>
                    <Row>
                      {/* <Col>: {data.job}</Col> */}
                    </Row>
                    <Row>
                      <Col></Col>
                    </Row>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
