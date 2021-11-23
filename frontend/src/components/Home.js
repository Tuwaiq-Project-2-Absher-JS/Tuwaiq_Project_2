import React, { Component } from 'react';
import {Container,Col,Row,Form,Button} from 'react-bootstrap';
import logo4 from "../img/abshir2.jpg";
import './stayle.css'

export default class Home extends Component {
    render() {
        return (
            <div>
    <Container>
    <Row>
    <Col md={3}id="login">Login
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button id="btn"variant="" type="submit">
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
    }
}
