// import React, { Component } from 'react';
import React, { useState } from "react";
import {Container,Col,Row,Form,Button} from 'react-bootstrap';
import logo4 from "../img/abshir2.jpg";
import axios from 'axios'
import {useNavigate } from "react-router-dom";
import './stayle.css'

export default function Home()   {
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
    .post('user/',
   {
     email: email,
     password: password
   }
    )
    .then(response => {
      console.log(response);
      navigation("/dashbord", {state: response})

    })
    .catch(err => {
  console.log(err);  });
     }
  
        return (
            <div>
    <Container>
    <Row>
    <Col md={3}id="login">Login
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    </Form.Group>
    <Button id="btn"variant="" type="submit"
        disabled={!validateForm()}
    >
    Login
    </Button>
    </Form>
    
    </Col>
    <Col id='ddd'><img src={logo4} alt="Abshir Image "></img></Col>
    <Col></Col>
    </Row>
</Container>
            </div>
        )
    
=======
import React, { Component } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import logo4 from "../img/abshir2.jpg";
import "./stayle.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={3} id="login">
              Login
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button id="btn" variant="" type="submit">
                  Login
                </Button>
              </Form>
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
}
