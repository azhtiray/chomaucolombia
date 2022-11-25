import React from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
//import APIHOST from "../../app.json";
import app from "../../app.json";
import './login.css';
import { isNull } from "util";
import Cookies from 'universal-cookie';
//import { resolve } from 'path';
import { CalcularExpirarSesion } from '../helper/helper';
import Loading from '../loading/loading';


const { host } = app; //login, app.json, helper al final,

const cookies = new Cookies();

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usuario: "",
            pass: "",
        };
    }
    iniciarSesion() {

        this.setState({ loading: true });
        axios
            .post(`${host}/usuarios/login`, {  //actualizar puerto en:front-app-json, back-bin-www
                usuario: this.state.usuario,
                pass: this.state.pass,
            })
            .then((response) => {
                if (isNull(response.data.token)) {
                    alert('Usuario y/o contraseña invalidos');
                }
                else {
                    cookies.set('_s', response.data.token, {
                        path: '/',
                        expires: CalcularExpirarSesion(),
                    });
                    this.props.history.push(('/empleados'));   // (window.open('/empleados'))----ABRE EN OTRA PESTAÑA
                window.location.reload();
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            });
        // alert(`usuario: ${this.state.usuario} - password: ${this.state.pass}`);
    }
    render() {
        return (
            <Container id="login-container">
                <Loading show={this.state.loading} />
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
                            <Button id="login-button" style={{ marginTop: 20, width: '100%' }}
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
