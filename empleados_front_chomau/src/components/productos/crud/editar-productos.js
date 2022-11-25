import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../productos.css';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/mesage';
import ConfirmationPrompts from '../../prompts/confirmation';

export default class ProductosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idProducto: this.props.getIdProducto(),
            rediret: false,                      // es rediret 
            message: {
                text: "",
                show: false,
            },
            confirmation: {
                title: "Modificar Producto",
                text: "¿Desea modificar el Producto?",
                show: false,
            },
            loading: false,
            producto: {
                nombre_producto: "",
                precio: "",
                cantidad: "",
                descripcion: "",
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }
    componentDidMount() {
        this.getProducto();
    }
    getProducto() {
        this.setState({ loading: true });
        request
            .get(`/productos/${this.state.idProducto}`)
            .then((response) => {
                this.setState({
                    producto: response.data,
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
            producto: {
                ...this.state.producto,
                [inicio]: value,
            },
        });
    }
    guardarProductos() {
        this.setState({ loading: true });
        request
            .put(`/productos/${this.state.idProducto}`, this.state.producto)
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
            this.guardarProductos()
        );
    }

    render() {
        return (
            <Container id='productos-editar-container'>

                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />
                <ConfirmationPrompts
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading} />
                <Row>
                    <h1> Editar Producto</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                value={this.state.producto.nombre_producto}
                                onChange={(e) => this.setValue("nombre_producto", e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                                value={this.state.producto.precio}
                                onChange={(e) => this.setValue("precio", e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>cantidad</Form.Label>
                            <Form.Control
                                value={this.state.producto.cantidad}
                                onChange={(e) => this.setValue("cantidad", e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>descripcion</Form.Label>
                            <Form.Control
                                value={this.state.producto.descripcion}
                                onChange={(e) => this.setValue("descripcion", e.target.value)} />
                        </Form.Group>

                        <Button variant="primary"
                            onClick={() => this.setState({
                                confirmation: {
                                    ...this.state.confirmation, show: true,
                                }
                            })}>
                            Guardar Editar Productos
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
