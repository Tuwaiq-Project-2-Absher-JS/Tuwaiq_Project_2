import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import './dashbord.css'
import { Link, useNavigate } from "react-router-dom";
import icon1 from "../img/family.png"
import icon2 from "../img/sponsorees.png"
import icon3 from "../img/drivingLicense.png"
import icon4 from "../img/vehicles.png"
import icon5 from "../img/traffic.png"
import icon6 from "../img/labourImportation.png"
import icon7 from "../img/passports.png"
import icon8 from "../img/travelRecord.png"
import icon9 from "../img/visitVisa.png"
import icon10 from "../img/volunteer.png"


// import Family from "../img/family.png";
// import Vehicles from "../img/vehicles.png";
// import License from "../img/drivingLicense.png";
import { Row, Col, Button } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Dashbord() {
  const { state } = useLocation();
  //console.log(state);
  const uId = state.id;
  console.log(uId);

  //axios call to get data
  const [data, setData] = useState([]);
  const navigation = useNavigate();
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

  function handleClick(e) {
    e.preventDefault();
    navigation("/information", { state: { id: data.id } }); //pass id as prop
  }

  function handleMember(e) {
    e.preventDefault();
    navigation("/member", { state: { id: data.id } }); //pass id as prop
  }


  return (
    <div>
      <div class="grid-container">
        <div class="grid-item item1">
          <Header />
        </div>
         {" "}
        <div class="grid-item item2" style={{height:"500px"}}>
          <h4>Electronic Servcies</h4>
          <hr />
          <h4>Authorization</h4>
          <hr />
          <h4>Absher Surveys</h4>
          <hr />
        </div>
          
        <div class="grid-item item3">
          <Row>
            <Col ><img style={{width:"50px"}} src={data.img}></img></Col>
            <Col ><h4 style={{fontSize:"15px",}}>{data.name}</h4></Col>
          </Row>
          -----------------------------------------
           <div className="text">
           <h4>Brith City</h4>
            <p>{data.birthCity}</p>
            <h4>Birth Country</h4>
            <p>{data.birthCountry}</p>
            <h4>Brith Date</h4>
            <p>{data.dateBrith}</p>
            <h4>Marital Status</h4>
            <p>{data.maritalStatus}</p>
            <h4>Occupation</h4>
            <p>{data.job}</p>
           </div>
           
          <Button id="btn" variant="" onClick={handleClick}>
            More Detail
          </Button>
        </div>
          
        <div id=" card-title" class="grid-item item4">
        <div className="titel-icon" >
          <img src={icon1}></img><h5 style={{marginRight:"100px",fontSize:"8"}}>{data.family}</h5>
          </div>           
        <p style={{fontSize:"14px"}}></p> 
         
          <Row>
            <Col id="text">Total Family Members
            </Col>
            <p>{data.Fmember}</p>
          </Row>
          <Row>
            <Col id="text">Total Family Members OutSide
            </Col>
            <p>{data.memberOutSide}</p>
          </Row>
          <Row>
            <Col id="text">Total Family Members Inside
            </Col>
            <p>{data.memberInside}</p>
          </Row>
          
          <Button id="btn2" variant="" onClick={handleMember}>
            More Detail
          </Button>
        </div>
           
        <div  class="grid-item item5">
          <div className="titel-icon" >
          <img src={icon2}></img><h5 style={{marginRight:"115px"}}>{data.Sponscress}</h5>
          </div>

          <Row className="row" style={{marginTop:"10px"}}>
            <Col id="text">Total Sponscress</Col>
            <p>{data.totalSponscress}</p>
          </Row>
          <Row>
            <Col id="text">Total Expired</Col>
            <p>{data.totalExpired}</p>
          </Row>
          <Row>
            <Col id="text">Must Renew</Col>
            <p>{data.mustRenew}</p>
          </Row>
          <Row>
            <Col id="text">Total Sponscress OutSide</Col>
            <p>{data.totalSponscress}</p>
          </Row>
          <Button id="btn" variant="">
            More Detail
          </Button>
        </div>

          
        <div id=" card-title" class="grid-item item6">
        <div className="titel-icon" >
          <img src={icon3}></img><h5 style={{marginRight:"100px"}}>{data.license}</h5>
          </div>
          <Row>
            <Col id="text">Total License</Col>
            <p>{data.totalLisense}</p>
          </Row>
          <Row>
            <Col id="text">Total Expired</Col>
            <p>{data.totalExpired}</p>
          </Row>
          <Row>
            <Col id="text">Must Renew</Col>
            <p>{data.mustRenew}</p>
          </Row>
          <Row>
            <Col id="text">Amount Deposited</Col>
            <p>{data.amountDeposited}</p>
          </Row>
          <Button id="btn" variant="">
            More Detail
          </Button>
        </div>
          
        <div class="grid-item item7">
        <div className="titel-icon" >
          <img src={icon4}></img><h5 style={{marginRight:"140px"}}>{data.veicles}</h5>
          </div>        
          <Row>
            <Col id="text">Total Vehicles</Col>
            <p>{data.totalVehicles}</p>

          </Row>
          <Row>
            <Col id="text">Total Expired</Col>
            <p>{data.totalExpired}</p>
          </Row>
          <Row>
            <Col id="text">Must Renew</Col>
            <p>{data.mustRenew}</p>
          </Row>
          <Row>
            <Col id="text">Amount Deposited</Col>
            <p>{data.mustRenew}</p>
          </Row>
          <Button id="btn" variant="">
            More Detail
          </Button>
        </div>
           
        <div class="grid-item item8">
        <div className="titel-icon" >
          <img src={icon5}></img><h5 style={{marginRight:"100px"}}>{data.traffic}</h5>
          </div>
        
          <Row>
            <Col id="text">Total Violation</Col>
            <p>{data.totalViolation}</p>
          </Row>
          <Row>
            <Col id="text">Total Violation Amount</Col>
            <p>{data.totalViolationA}</p>
          </Row>
          <Row>
            <Col id="text">Last Violation Date</Col>
            {data.lastViolation}
          </Row>
        </div>
           
        <div class="grid-item item9">
        <div className="titel-icon" >
          <img src={icon6}></img><h5 style={{marginRight:"50px"}}>Labour Importation</h5>
          </div>
                 
          <Row>
            <Col id="text">Total Follow Up</Col>
            <p>0</p>
          </Row>
          <Row>
            <Col id="text">Total Visas Requsted</Col>
            <p>0</p>
          </Row>
          <Row>
            <Col id="text">total Sent to MOFA</Col>
            <p>0</p>
          </Row>
          <Row>
            <Col id="text">Amount Deposited</Col>
            <p>0</p>
          </Row>
          <Button id="btn" variant="">
            More Detail
          </Button>
        </div>
            
        <div class="grid-item item10">
        <div className="titel-icon" >
          <img src={icon7}></img><h5 style={{marginRight:"110px"}}>Passports</h5>
          </div>       
          <Row> 
        
            <Col id="text">Passport Number</Col>
            <p>0</p>
          </Row>
          <Row>
            <Col id="text">Total Expired</Col>
            <p>0</p>
          </Row>
          <Row>
            <Col id="text">Must Renew</Col>
            <p>0</p>
          </Row>
          <Row>
            <Col id="text">Amount Deposited</Col>
            <p>0</p>
          </Row>
          <Button id="btn" variant="">
            More Detail
          </Button>
        </div>
            
        <div class="grid-item item11">
        <div className="titel-icon" >
          <img src={icon8}></img><h5 style={{marginRight:"110px"}}>Travel Records</h5>
          </div>          
          <Row>
            <Col id="text">Travel status</Col>
            <p>0</p>
          </Row>
          <Row>
            <Col id="text">Last Travel Destenation</Col>
            <p>0</p>
          </Row>
          <Row>
            <Col id="text">Last Travel Date</Col>
            <p>0</p>
          </Row>
          <Button id="btn" variant="">
            More Detail
          </Button>
        </div>
            
        <div class="grid-item item12">
        <div className="titel-icon" >
          <img src={icon9}></img><h5 style={{marginRight:"110px"}}>Visit Visas</h5>
          </div>    
          {" "}         
          <Row>
            <Col id="text">Number Of Valid Visit Visas</Col>
            <p>0</p>
          </Row>
          <Row>
            <Col id="text"> Number Of Expired Visit Visas</Col>
            <p>0</p>
          </Row>
          <Row>
            <Col id="text"> Total Number Of Visit Visas</Col>
            <p>0</p>
          </Row>
        </div>
            
        <div class="grid-item item13">
        <div className="titel-icon" >
          <img src={icon10}></img><h5 style={{marginRight:"50px",fontSize:"8"}}>Volunteer information</h5>
          </div>           
          <Row>
            <Col id="text">Number of Volunteer houres</Col>
            <p>0</p>
          </Row>
          <Row>
            <Col id="text"> Number of Volunteer Times</Col>
            <p>0</p>
          </Row>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
