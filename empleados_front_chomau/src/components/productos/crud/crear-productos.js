import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap"; 
import '../productos.css';
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/mesage";

export default class ProductosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,                      // es rediret ò redirect
            message: {
                text: "",
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
            .post("/productos", this.state.producto)
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
            <Container id='productos-crear-container'>
                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />

                <Loading show={this.state.loading} />
                <Row>
                    <h1> Crear Producto</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("nombre_producto", e.target.value)} placeholder="Ingrese nombre de producto" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("precio", e.target.value)} placeholder="Ingrese el precio del producto"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("cantidad", e.target.value)} placeholder="Ingrese la cantidad de producto"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formbasic">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("descripcion", e.target.value)} placeholder="Ingrese la descripcion de producto"/>
                        </Form.Group>

                        <Button variant="primary" onClick={() => console.log(this.guardarProductos())}>
                            Guardar producto
                        </Button>
                    </Form>
                </Row>

            </Container>
        );
    }
}

