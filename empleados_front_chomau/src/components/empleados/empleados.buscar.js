import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { request } from '../helper/helper';
import BootstrapTable from 'react-bootstrap-table-next';

const products = [{
    id: 1,
    name: "Molde Rosas",
    price: 2000,
},
{
    id: 2,
    name: "Molde alas de angel",
    price: 3000,
},
{
    id: 3,
    name: "Molde hojas",
    price: 3000,
},
{
    id: 4,
    name: "Molde moños",
    price: 3500,
},
{
    id: 5,
    name: "Cortador 3D",
    price: 3900,
},
{
    id: 6,
    name: "Molde corazon",
    price: 20000,

}];





const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];




export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        request
            .get("/empleados")
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        return <Container>

            <Row>
                <h1 style={{ marginTop: 100 }}>
                    Buscar Empleados
                </h1>
            </Row>
            <Row>
                <BootstrapTable keyField='id' data={products} columns={columns} />
            </Row>
        </Container>;

    }
}

