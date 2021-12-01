
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col, Card, } from "react-bootstrap";
import { useLocation } from "react-router";
import Header from "../Header/Header";
// import "./stayle.css";
import Footer from "../Footer/Footer";

export default function Member() {
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
                      <Col> Number: {data.nationalID}</Col>
                      <Col> Educatuin: {data.education}</Col>
                    </Row>
                    <Row>
                      <Col> Name: {data.name}</Col>
                      <Col> Marital status: {data.maritalStatus}</Col>
                    </Row>
                    <Row>
                      <Col> Brith City: {data.birthCity}</Col>
                      <Col> is Enrolled: {data.enrolled}</Col>
                    </Row>
                    <Row>
                      <Col>Brith Country: {data.birthCountry}</Col>
                    </Row>
                    <Row>
                      <Col>Occuption: {data.job}</Col>
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
    )
}
