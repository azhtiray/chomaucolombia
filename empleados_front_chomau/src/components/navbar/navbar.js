import React from 'react';
import { Container, Nav, Navbar, Dropdown, DropdownButton, Row,  } from "react-bootstrap";  //La col de columna aun no se ha definido como variable
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  Logout(){
    cookies.remove('_s');
    window.location.reload();
  }
  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="primary" variant='dark'>
        <Container>
          <Navbar.Brand href="#home">Tienda Chomau Colombia<span id="usuario-sub-branm"></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
            <DropdownButton title="Usuario">
              <Dropdown.Header id='dropdown-header'>
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Row>
                <Row>
                  #USUARIO#
                </Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={()=> this.Logout()}>
                Cerrar Sesión
                </Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}