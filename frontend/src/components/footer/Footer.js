import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,} from "mdbreact";
import logo4 from "./imgfooter.jpg";
import logo5 from "./abshir33.jpg";

const FooterPage = () => {
  return (
    <MDBFooter color="white" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <b className="title">Powered by National Information Center </b>
            <img src={logo4} alt="Abshirs " height="20px"></img>
            <p>Absher is the leading platform in electronic services</p>
          </MDBCol>
          <MDBCol md="6"style={{paddingleft: "200px"}}>
            <b className="title" >Links :</b>
            <ul>
              <li className="list-unstyled">
                <a href="#!">-About Absher</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">-News</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">-Terms of Use</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">-Registration and Activation Centers</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com">  Absher, Kingdom of Saudi Arabia. </a>
          <img src={logo5} alt="Abshirs " height="100px"></img>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;