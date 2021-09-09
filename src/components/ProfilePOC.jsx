import React, { Component } from "react";
import './GlobalVariable';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Grid, Segment, List, Header, Image } from "semantic-ui-react";
import FooterComponent from "./FooterComponent";
import EmployeeService from "../services/EmployeeService";

class ProfilePOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:''
    };
  }

  viewProfile = () => {
    this.props.history.push("/ProfilePOC");
    
  };

  postNewReq = (e) => {
    e.preventDefault();
    this.props.history.push('/PostRequirementComponent');
  }
  closeReq = (e) => {
    e.preventDefault();
    this.props.history.push('/CloseRequirement');
  }

  editProfile = () => {
    this.props.history.push("/EditProfilePOC");
    
  };

  uploadProfile = () => {
    this.props.history.push("/UploadProfilePOC");
    
  };

  home=()=>{
    this.props.history.push("/POCHomeComponent");
  }


  logout = (e) => {
    e.preventDefault();
      EmployeeService.logout().then((res) => {
        let s = res.data;
        if (s.booleanMsg) {
          window.userId = "";
          window.userType = "";
          window.firstName = "";
          window.lastName = "";
          window.contact = "";
          window.sessionId = "";
          localStorage.clear();
          this.props.history.push('/Home');
        } 
        
      });
  };
  
  render() {
    return (<div>
      <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand>
              <img
                src="images/logosymbol.png"
                width="30"
                style={{ marginRight: "1.5em"}}
              />
              Recruit Right
            </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.home}>Home</Nav.Link>
                <NavDropdown
                    title="Requirement"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item onClick={this.postNewReq}>
                    Post New Requirement
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.closeReq}>
                      Close Requirement
                    </NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              <Nav>
              <NavDropdown
                    title={window.firstName + " " + window.lastName}
                    id="basic-nav-dropdown"
                    style={{ marginLeft: "20" }}
                  >
                    <NavDropdown.Item onClick={this.viewProfile}>
                      View Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.editProfile}>
                      Edit Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.uploadProfile}>
                      Upload Resume
                    </NavDropdown.Item>
                  </NavDropdown>
                <Nav className="me-auto">
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link onClick={this.logout}>
                    Logout
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="page-wrap">
        <div className="container p-5 center">
          <div className="card " style={{width: "35rem" }} >
            <div className="p-5">
              <h1 className="text-center">Profile</h1>
              <br></br>
              <label style={{fontSize:16}}> First Name: {window.firstName}</label>
              <br></br>
              <br></br>
              <label style={{fontSize:16}}> Last Name: {window.lastName}</label>
              <br></br>
              <br></br>
              <label style={{fontSize:16}}> Contact: {window.contact}</label>
              <br></br>
              <br></br>
              <label style={{fontSize:16}}> Email: {window.userId}</label>
              <br></br>
              <br></br>
              <br></br>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.editProfile}
                >
                  Edit Profile
                </button>
              </div>
              <br></br>
            </div>
        </div>
      </div>
      </div><FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default ProfilePOC;
