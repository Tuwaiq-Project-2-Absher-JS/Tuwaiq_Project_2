import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../img/abshir.jpg";
import logo2 from "../img/2030.jpg";
import logo3 from "../img/saudi.jpg";
import './stayle.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="" variant="light" id="nav">
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
        </Navbar>
        {/* - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - -- 
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      </div>
    );
  }
}
