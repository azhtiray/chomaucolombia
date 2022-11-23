import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../empleados.css';
import DataGrid from '../../grid/grid';

const columns = [{
    dataField: '_id',
    text: 'ID',
    hidden: true,
},
{
    dataField: 'nombres',
    text: 'Nombres'
},
{
    dataField: 'apellidos',
    text: 'Apellidos'
},
{
    dataField: 'telefono',
    text: 'Telefono'
},
{
    dataField: 'mail',
    text: 'Correo Electronico'
},
{
    dataField: 'direccion',
    text: 'Direccion'
},
];
export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onClickEditButton = this.onClickEditButton.bind(this);
    }
    componentDidMount() { }

    onClickEditButton(row) {
        this.props.setIdEmpleado(row._id);     ///modificado this.props.setIdEmpleado(row._id);
        this.props.changeTab('Editar');
    }
    render() {
        return (
            <Container id='empleados-buscar-container'>
                <Row>
                    <h1>Buscar Empleados</h1>
                </Row>
                <Row>
                    <DataGrid url="/empleados" columns={columns} 
                    showEditButton={true}
                    onClickEditButton ={this.onClickEditButton}
                    />
                </Row>
            </Container>
        )
    }
}

//
//////minuto1:24:43
// 



