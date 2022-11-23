import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../empleados.css';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading'
import MessagePrompt from '../../prompt/mesage';

export default class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idEmpleado: this.props.getIdEmpleado(),
            redirect: false,                      // es rediret ò redirect
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
    componentDidMount() {
        this.getEmpleado();
    }
    getEmpleado() {
        this.setState({ loading: true });
        request
            .get(`/empleados/${this.state.idEmpleado}`)
            .then((response) => {
                this.setState({
                    empleado: response.data,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    
    setValue(inicio, value) {
        this.setState({
            empleado: {
                ...this.state.empleado,
                [inicio]: value,
            },
        });
    }
    
    onExitedMessage() {
        if (this.state.redirect) this.props.changeTab('buscar');         // es rediret ò redirect
    }
    render() {
        return (
            <Container id='empleados-editar-container'>
                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />

                <Loading show={this.state.loading} />
                <Row>
                    <h1> Editar Empleado</h1>
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

