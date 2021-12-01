import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Col,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import HomeNav from "../Header 2/HomeNav";
import "./style.css";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import Footer from "../Footer/Footer";


export default function Rigester() {
  const [userName, setUserName] = useState("");
  const [userId, setUserID] = useState("");
  const [userTell, setUserTell] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmile, setUserEmile] = useState("");
  const navigation = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/user/rigester", {
        name: userName,
        id: userId,
        tell: userTell,
        password: userPassword,
        emile: userEmile,
      })
      .then(response=>{
        console.log(response);
        navigation('/rigester')
      })
      .catch(err =>{
        console.log(err.response.data)
      });
  }



  return (
    <div >
      <HomeNav/>
      {/* <Navbar bg="" variant="light" id="nav">
        <Container>
          <Navbar.Brand md={-3} href="#home">
            <img src={logo} alt="Abshir Image " height="80px"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <img
                src={logo2}
                alt="2030"
                style={{ height: "80px", paddingRight: "900px" }}
              ></img>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <img src={logo3} alt="logo" height="80px"></img>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <Container style={{marginTop:"10px"}}>
        <Row>
          <Col className="register">
          <h2 class="my-4 login-title logintoggel">
              <span class="sprites sprite-logingreen"></span>Register
            </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-2"
                controlId="formGroupIdNumber"
                style={{ width: "300px" }}
              >
                <Form.Label>ID Number :</Form.Label>
                <Form.Control
                  type="idNumber"
                  placeholder="ID Number"
                  onChange={(e) => {
                    setUserID(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="formGroupNumber"
                style={{ width: "300px" }}
              >
                <Form.Label>Mobile Number :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="5xxxxxxxxx"
                  onChange={(e) => {
                    setUserTell(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="formGroupUserName"
                style={{ width: "300px" }}
              >
                <Form.Label>Username in English :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username in English"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="formGroupPassword"
                style={{ width: "300px" }}
              >
                <Form.Label>Password :</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="formGroupEmail"
                style={{ width: "300px" }}
              >
                <Form.Label>Email :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email "
                  onChange={(e) => {
                    setUserEmile(e.target.value);
                  }}
                />
              </Form.Group>
          
              <Button style={{marginLeft:"50px"}} id="btn" variant="" type="submit">
              Register
            </Button>
            </Form>
            <Link id="sign2" to ="/">
            <h6 className="new">you have account?</h6>
            </Link>

          </Col>
          <Col style={{marginRight:"450px"}}>
            <h6>Please note the following:</h6>
            1.Enter your ID/Iqama Number.<br></br>
            2.Entering an invalid mobile number will result in user registration
            failure.<br></br>
            3.It is illegal to use someone else ID other than your own.<br></br>
            4.This is your private mobile number. Please don't use it in any
            other account to avoid number cancellation.<br></br>
            5.For User ID only Latin characters, digits, minimum of 8
            characters, and starting with a character.<br></br>
            <h6>Attention:</h6> Username cannot be edited or modified after
            registration is completed.<br></br>
            The Password must follow the Password Policy shown below.<br></br>
            <h6>Password Policy:</h6>
            1.Must be at least 8 characters long.<br></br>
            2.Must contain a capital character.<br></br>
            3.Must contain a lowercase character.<br></br>
            4.Must contain a numeric character.<br></br>
            5.Must not contain any special character(_,%,!,@,. etc)<br></br>
            6.Must not contain a portion of User ID longer than 4 characters.
            <br></br>
            7.Must contain more than 4 similar characters.<br></br>
            8.Confirm password must match the password.<br></br>
            9.Ensure the keyboard input language is English<br></br>
          </Col>
        </Row>
      </Container>
      {/* <Header /> */}
      <Footer/>
    </div>
  );
}