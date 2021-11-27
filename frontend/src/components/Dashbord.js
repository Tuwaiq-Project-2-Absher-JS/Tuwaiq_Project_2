        import React, { Component } from "react";
        import {
        Navbar,
        Nav,
        Button,
        Container,
        Col,
        Row,
        Card,
        ListGroup,
        ListGroupItem
        } from "react-bootstrap";
        import logo from "../img/abshir.jpg";
        import logo2 from "../img/2030.jpg";
        import logo3 from "../img/saudi.jpg";
        import "./stayle.css";

        export default class Dashbord extends Component {
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
                {/* ---------------------------------------------------------------------------------- */}
                <Container>
        <Row>
            <Col md={3}>
            <Card style={{ width: '15rem',height:"80vh",marginTop:"10px" }}>
        <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        </Card>
        </Col>
        {/* --------------------------------------------------------- End left card */}
            
            <Col md={9} className='cols'>
            <Row>
            <Col md={3} className='cols-internal'>
            <Card style={{ }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
            </Col>
            <Col md={3}>
            <Card style={{  }}>
        <Card.Body>
            <Card.Title style={{fontSize:"18px"}}>Family Members</Card.Title>
            <Card.Text>
            Total Sposorees
            </Card.Text>
            <Card.Text>
            Total Expired
            </Card.Text>
            <Card.Text>
            Must Renew
            </Card.Text>
            <Card.Text>
            Total Sposorees
            </Card.Text>
            <Button id="btn"variant="" type="button"
            >
        MORE DETAIL
            </Button>

        </Card.Body>
        </Card>
            </Col>
            <Col md={3}>
            <Card style={{  }}>
        <Card.Body>
            <Card.Title style={{fontSize:"18px"}}>Family Members</Card.Title>
            <Card.Text>
            Total Sposorees
            </Card.Text>
            <Card.Text>
            Total Expired
            </Card.Text>
            <Card.Text>
            Must Renew
            </Card.Text>
            <Card.Text>
            Total Sposorees
            </Card.Text>
            <Button id="btn" variant="">MORE DETAIL</Button>
        </Card.Body>
        </Card>
            </Col>
            <Col md={3}>
            <Card style={{  }}>
        <Card.Body>
            <Card.Title style={{fontSize:"18px"}}>Family Members</Card.Title>
            <Card.Text>
            Total Sposorees
            </Card.Text>
            <Card.Text>
            Total Expired
            </Card.Text>
            <Card.Text>
            Must Renew
            </Card.Text>
            <Card.Text>
            Total Sposorees
            </Card.Text>
            <Button id="btn" variant="">MORE DETAIL</Button>
        </Card.Body>
        </Card>
            </Col>
            </Row>
            
            </Col>
            </Row>
        </Container>
            </div>
            );
        }
        }
        {
        /* <Card body style={{height:"80vh"}}>This is some text within a card body <hr/></Card>
        <Card body style={{height:"80vh"}}>This is some text within a card body <hr/></Card> */
        }

        {
}
