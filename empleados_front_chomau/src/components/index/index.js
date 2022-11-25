import React from 'react';
import { Carousel } from 'react-bootstrap';
import Cards from '../cards/cards';
import './index.css';



export default class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <Carousel id='carrusel'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('./imagenes/moldes2.png')}
                            alt="First slide"
                        />
                        <Carousel.Caption id='Carousel-Caption'>
                            <h1 class='titulo-slide'>Bienvenidos a Chomau</h1>
                            <p class='titulo-parrafo-slide'>La Mejor Tienda de Insumos y Utensilios de Reposteria</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('./imagenes/reposteria.jpg')}
                            alt="Second slide"
                        />

                        <Carousel.Caption id='Carousel-Caption'>
                            <h1 class='titulo-slide'>Moldes de Silicona</h1>
                            <p class='titulo-parrafo-slide'>Vendemos Moldes de Silicona de la Mas Alta Calidad Para Reposteria</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('./imagenes/moldes3.png')}
                            alt="Third slide"
                        />

                        <Carousel.Caption id='Carousel-Caption'>
                            <h1 class='titulo-slide'>¡Tenemos los Mejores Precios del Mercado!</h1>
                            <p class='titulo-parrafo-slide'>
                                Encuentra lo que necesitas al mejor precio
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className="container-fluid'>">
                <br></br>
                <h3 className='text-center mt-5 text-uppercase' style={{color:'#ff90ff'}}>Nuestros productos</h3>
                <div className="container py-4">
                <div className="row">
                    <Cards/>
                </div>
            </div>
            </div>

                <footer id='footer'><div class= 'titulo-footer'><h1>Chomau Colombia</h1>
                    </div> <div class= 'parrafo-footer'>
                    <p> La Mejor Tienda de Insumos y Utensilios de Reposteria </p>
                    <p>© Copyright Chomau Colombia. All Rights Reserved</p></div>
                </footer>
            </>


        );
    }
}


