import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../empleados.css';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading'
import MessagePrompt from '../../prompt/mesage';
import ConfirmationPrompt from '../../prompt/confirmation';

export default class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idEmpleado: this.props.getIdEmpleado(),
            rediret: false,                      // es rediret 
            message: {
                text: "",
                show: false,
            },
            confirmation: {
                title: "Modificar Empleado",
                text: "¿Desea modificar el empleado?",
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
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
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
    guardarEmpleados() {
        this.setState({ loading: true });
        request
            .put(`/empleados/${this.state.idEmpleado}`, this.state.empleado)
            .then((response) => {
                if (response.data.exito) {
                    this.props.changeTab('buscar');
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab('buscar');         // es rediret 
    }
    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        })
    }
    onConfirm() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        },
       this.guardarEmpleados()
        );
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
                <ConfirmationPrompt
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading} />
                <Row>
                    <h1> Editar Empleado</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control
                                value={this.state.empleado.nombres}
                                onChange={(e) => this.setValue("nombres", e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                                value={this.state.empleado.apellidos}
                                onChange={(e) => this.setValue("apellidos", e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control
                                value={this.state.empleado.direccion}
                                onChange={(e) => this.setValue("direccion", e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                value={this.state.empleado.telefono}
                                onChange={(e) => this.setValue("telefono", e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                value={this.state.empleado.mail}
                                onChange={(e) => this.setValue("mail", e.target.value)} />
                        </Form.Group>
                        <Button variant="primary"
                            onClick={() => this.setState({
                                confirmation: {
                                    ...this.state.confirmation, show: true,
                                }
                            })}>
                            Guardar Editar Empleados
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}


//  {/* { <Button onClick={() => console.log(this.guardarEmpleados())}>
//                                 Guardar Editar Empleados
//                             } */}
