import React from 'react';
import { Container, Nav, Navbar, Dropdown, DropdownButton, Row,  } from "react-bootstrap";  //La col de columna aun no se ha definido como variable
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';


export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <Navbar fixed="top" id="navbar" variant='dark'>
        <Container>
          <Navbar.Brand href="/index">Tienda Chomau Colombia<span id="usuario-sub-branm"></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>

            <DropdownButton id="dropdown-button" title="Usuario">
              <Dropdown.Header id='dropdown-header'>
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Row>
                <Row>
                  ADMIN
                </Row>

              </Dropdown.Header>
              <Dropdown.Divider />

              <Dropdown.Item href="/login">Iniciar Sesion</Dropdown.Item>
              <Dropdown.Item href="/index">Cerrar Sesion</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}