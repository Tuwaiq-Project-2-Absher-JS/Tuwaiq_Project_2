
import logo from "../img/abshir.jpg";
import logo2 from "../img/2030.jpg";
import logout from "../img/logout.png";
import dash from "../img/dash.png";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// import Family from "../img/family.png";
// import Vehicles from "../img/vehicles.png";
// import License from "../img/drivingLicense.png";
import logo3 from "../img/saudi.jpg";
import { Card, Row, Col,Navbar,Container,Image} from "react-bootstrap";
import "./style.css";

export default function Header() {
  const { state } = useLocation();
  const [data, setData] = useState([]);
  const navigation = useNavigate();
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

  function handleback(e) {
    e.preventDefault();
    navigation("/dashbord", { state: { id: data.id } }); //pass id as prop
  }
  function handleUser(e) {
    e.preventDefault();
    navigation("/user", { state: { id: data.id } }); //pass id as prop
  }
 
  return (
    <div>
      <div class=" item1">
      <Navbar className="nav">
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
                  <div className="vr" />
                  <Col sm>
                    <img
                      src={logo2}
                      style={{ marginRight: "20px" }}
                      alt="2030"
                    ></img>
                  </Col>
                </Row>
              </Col>
              <Col sm>
                <Row id="card-row" style={{ marginTop: "15px" }}>
                  <Col sm>
                    <Card id="card">
                      <Image id="bg-img" src={data.img} />
                      <Card.Body id="card-body">
                        <Link id="link" onClick={handleUser} to="/user">
                          <Card.Title id="name">{data.name}</Card.Title>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm>
                    <Card id="card" onClick={handleback}>
                      <Image id="bg-img" src={dash} />
                      <Card.Body id="card-body">
                        <Card.Title id="name">Dashbord</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm>
                    <Card id="card">
                      <Image id="bg-img" src={logout} />
                      <Card.Body id="card-body">
                        <Link id="link" to="/">
                          <Card.Title id="name1">logout</Card.Title>
                        </Link>
                      </Card.Body>
                    </Card>
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
  
  )
}
