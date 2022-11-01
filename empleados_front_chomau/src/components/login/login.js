import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './login.css';


export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            pass: ''

        };
    }

    iniciarSesion(){
        alert(`usuario: ${this.state.usuario} - password: ${this.state.pass}`);

    }

    render() {
        return (
            <Container id="login-container">


                <Row>
                    <h2>Iniciar Sesión</h2>
                </Row>
                <Row>
                    <Col
                        sm="12"
                        xs="12"
                        md={{ span: 4, offset: 4 }}
                        lg={{ span: 4, offset: 4 }}
                        xl={{ span: 4, offset: 4 }}
                    >
                        <Form>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control onChange={(e) =>
                                    this.setState({ usuario: e.target.value })} />

                                {/* {this.state.usuario} */}

                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control onChange={(e) =>
                                    this.setState({ pass: e.target.value })} />
                                {/* {this.state.pass} */}
                            </Form.Group>


                            <Button variant="primary" style={{marginTop:20, width:'100%'}}
                                onClick={() => {
                                    this.iniciarSesion();

                                }}>
                                    Iniciar Sesión

                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        );
    }
}
