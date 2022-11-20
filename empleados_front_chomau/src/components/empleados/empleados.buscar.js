import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './empleados.css';
import DataGrid from '../grid/grid';

const columns = [{
    dataField:'_id',
    text:'ID',
    hidden: true,
},
{
    dataField:'nombres',
    text:'Nombres'
},
{
    dataField:'apellidos',
    text:'Apellidos'
},
{
    dataField:'telefono',
    text:'Telefono'
},
{
    dataField:'mail',
    text:'Correo Electronico'
},
{
    dataField:'direccion',
    text:'Direccion'
}]





export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    
    render() {
        return <Container id='empleados-buscar-container'>
            <Row>
                <h1 style={{ marginTop: 100 }}>
                    Buscar Empleados
                </h1>
            </Row>

            <Row>
                <DataGrid url="/empleados" columns = { columns } />
            </Row>
        </Container>;
    }
}



// {...props.baseProps}

