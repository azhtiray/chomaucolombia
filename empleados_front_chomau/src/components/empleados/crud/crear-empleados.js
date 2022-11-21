import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../empleados.css';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading'

export default class EmpleadosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            empleado: {
                nombres: "",
                apellidos: "",
                telefono: "",
                mail: "",
                direccion: "",
            }
        }
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

        this.setState ({loading : true});

        request
            .post("/empleados", this.state.empleado)
            .then((response) => {
                this.setState ({loading : false});
                console.log(response.data)
            })
            .catch((err) => {
                console.error(err);
                this.setState ({loading : true});
            });
    }

    render() {
        return (
            <Container id='empleados-crear-container'>
                <Loading show={this.state.loading} />


                <Row>
                    <h1> Crear Empleado</h1>
                </Row>

                <Row>
                    <Form id=''>
                        <Form.Group className="mb-3" controlId="formulario">

                            <Form.Label>Nombres</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("nombres", e.target.value)} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formulario">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("apellidos", e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formulario">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("direccion", e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formulario">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("telefono", e.target.value)} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formulario">
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

