import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { request } from '../helper/helper';
import './empleados.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';


const { SearchBar } = Search;

const products = [
    {
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
    },
    {
        id: 7,
        name: "Cortador 3D",
        price: 3900,
    },
    {
        id: 8,
        name: "Cortador 3D",
        price: 3900,
    },
    {
        id: 9,
        name: "Cortador 3D",
        price: 3900,
    },
    {
        id: 10,
        name: "Cortador 3D",
        price: 3900,
    },
    {
        id: 11,
        name: "Cortador 3D",
        price: 3900,
    },
    {
        id: 12,
        name: "Cortador 3D",
        price: 3900,
    },
    {
        id: 13,
        name: "Cortador 3D",
        price: 3900,
    }];





const columns = [
    {
        dataField: 'id',
        text: 'Product ID'
    },
    {
        dataField: 'name',
        text: 'Product Name'
    },
    {
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
        const options = {                        //standalone pagination list
            custom: true,
            totalSize: products.length
        };


        return <Container id='empleados-buscar-container'>
            <Row>
                <h1 style={{ marginTop: 100 }}>
                    Buscar Empleados
                </h1>
            </Row>


            <Row>
                <ToolkitProvider
                    keyField="id"
                    data={products}
                    columns={columns}

                    search>
                    {(props) => (
                        <>
                            <h3>Input something at below input field:</h3>
                            <SearchBar {...props.searchProps} />
                            <hr />
                            <PaginationProvider pagination={paginationFactory(options)}>
                                {({ paginationProps, paginationTableProps }) => (
                                    <div>
                                        <SizePerPageDropdownStandalone {...paginationProps} />
                                        <BootstrapTable
                                            keyField="id"
                                            data={products}
                                            columns={columns}
                                            {...paginationTableProps}
                                            {...props.baseProps}
                                        />
                                        <PaginationListStandalone {...paginationProps} />
                                    </div>
                                )}
                            </PaginationProvider>
                            {/* <BootstrapTable  /> */}
                        </>
                    )}
                </ToolkitProvider>
            </Row>
        </Container>;
    }
}



// {...props.baseProps}

