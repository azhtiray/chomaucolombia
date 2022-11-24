import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../empleados.css';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/mesage';

export default class EmpleadosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,                      // es rediret ò redirect
            message: {
                text: "",
                show: false,
            },
            loading: false,
            empleado: {
                nombres: "",
                apellidos: "",
                telefono: "",
                mail: "",
                direccion: "",
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }
    setValue(inicio, value) {
        this.setState({
            empleado: {
                ...this.state.empleado,
                [inicio]: value,
            },
        });
    }
    guardarEmpleados() {
        this.setState({ loading: true });
        request
            .post("/empleados", this.state.empleado)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,      // es rediret ò redirect
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab('buscar');         // es rediret ò redirect
    }
    render() {
        return (
            <Container id='empleados-crear-container'>
                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />

                <Loading show={this.state.loading} />
                <Row>
                    <h1> Crear Empleado</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("nombres", e.target.value)} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("apellidos", e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("direccion", e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("telefono", e.target.value)} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("mail", e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" onClick={() => console.log(this.guardarEmpleados())}>
                            Guardar empleado
                        </Button>
                    </Form>
                </Row>

            </Container>
        );
    }
}

