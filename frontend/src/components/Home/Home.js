// import React, { Component } from 'react';
import React, { useState } from "react";
import swal from "sweetalert2";
import HomeNav from "../Header 2/HomeNav";
import Alert from "react-bootstrap/Alert";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import logo4 from "../img/abshir2.jpg";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";
// const SweetAlert = require('react-bootstrap-sweetalert');

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    //   axios.get('http://localhost:5000/user',data {
    //     email,
    //     password
    //   })
    //   .then( (response)=> {
    //     console.log(response);
    //     // navigation('/gggg')
    //   })
    //   .catch( (error)=> {
    //     console.log("error");
    //   });
    axios
      .post("user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        navigation("/dashbord", { state: { id: response.data.id } }); //pass id as prop
        swal.fire({
          icon: "success",
          title: "Welcome agine",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: "please cheake your information!",
        });
      });
  }

  return (
    <div>
      <HomeNav />
      <Container>
        <Row>
          <Col md={3} id="login">
            <h2 class="my-4 login-title logintoggel">
              <span class="sprites sprite-logingreen"></span> Login
            </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button id="btn" variant="" type="submit">
                Login
              </Button>
            </Form>
            <Link to="/register">
              <h6 className="new">New User?</h6>
            </Link>
          </Col>
          <Col id="ddd">
            <img src={logo4} alt="Abshir Image "></img>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
