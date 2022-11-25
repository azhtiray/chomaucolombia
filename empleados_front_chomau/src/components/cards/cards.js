import React from 'react';



export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
            <>
                <div id='card-shop' className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3' style={{marginTop: 20}}>
                    <div className='card h-100 shadow'>
                        <div className='card-body'>
                            <img src={require('./images/1.jpg')} 
                                 style={{width: 250, height: 250, marginTop:20 ,marginBottom:20}}
                                 alt='Molde 6 corazones' />
                            <h5 className='card-title'>Molde 6 corazones</h5>
                            <p className='card-text'>Tamaño: 17 cm x 22 cm</p>
                            <button className='btn btn-outline-secondary'>Comprar</button>
                        </div>
                    </div>
                </div>
                <div id='card-shop' className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3' style={{marginTop: 20}}>
                    <div className='card h-100 shadow'>
                        <div className='card-body'>
                            <img src={require('./images/2.jpg')} 
                                 style={{width: 250, height: 250, marginTop:20 ,marginBottom:20}} 
                                 alt='Molde 6 corazones' />
                            <h5 className='card-title'>Molde Primera Comunion</h5>
                            <p className='card-text'>Tamaño: 8 cm x 3.5 cm</p>
                            <button className='btn btn-outline-secondary'>Comprar</button>
                        </div>
                    </div>
                </div>
                <div id='card-shop' className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3' style={{marginTop: 20}}>
                    <div className='card h-100 shadow'>
                        <div className='card-body'>
                            <img src={require('./images/3.jpg')} 
                                 style={{width: 250, height: 250, marginTop:20 ,marginBottom:20}}
                                 alt='Molde 6 corazones' />
                            <h5 className='card-title'>Molde Coronas y Moños</h5>
                            <p className='card-text'>Tamaño: 7,3 cm x 9     cm</p>
                            <button className='btn btn-outline-secondary'>Comprar</button>
                        </div>
                    </div>
                </div>
                <div id='card-shop' className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3' style={{marginTop: 20}}>
                    <div className='card h-100 shadow'>
                        <div className='card-body'>
                            <img src={require('./images/4.jpg')} 
                                 style={{width: 250, height: 250, marginTop:20 ,marginBottom:20}}
                                 alt='Molde 6 corazones' />
                            <h5 className='card-title'>Molde Alas de Ángel</h5>
                            <p className='card-text'>Tamaño: 6,8 cm x 6,6 cm</p>
                            <button className='btn btn-outline-secondary'>Comprar</button>
                        </div>
                    </div>
                </div>
                <div id='card-shop' className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3' style={{marginTop: 20}}>
                    <div className='card h-100 shadow'>
                        <div className='card-body'>
                            <img src={require('./images/5.jpg')} 
                                 style={{width: 250, height: 250, marginTop:20 ,marginBottom:20}} 
                                 alt='Molde 6 corazones' />
                            <h5 className='card-title'>Molde Hojas de Arce</h5>
                            <p className='card-text'>Tamaño: 17 cm x 22 cm</p>
                            <button className='btn btn-outline-secondary'>Comprar</button>
                        </div>
                    </div>
                </div>
                <div id='card-shop' className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3' style={{marginTop: 20}}>
                    <div className='card h-100 shadow'>
                        <div className='card-body'>
                            <img src={require('./images/6.jpg')} 
                                 style={{width: 250, height: 250, marginTop:20 ,marginBottom:20}} 
                                 alt='Molde 6 corazones' />
                            <h5 className='card-title'>Molde 6 corazones</h5>
                            <p className='card-text'>Tamaño: 17cm x 22cm</p>
                            <button className='btn btn-outline-secondary'>Comprar</button>
                        </div>
                    </div>
                </div>
                <div id='card-shop' className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3' style={{marginTop: 20}}>
                    <div className='card h-100 shadow'>
                        <div className='card-body'>
                            <img src={require('./images/7.jpg')} 
                                 style={{width: 250, height: 250, marginTop:20 ,marginBottom:20}} 
                                 alt='Molde 6 corazones' />
                            <h5 className='card-title'>Molde 6 corazones</h5>
                            <p className='card-text'>Tamaño: 17cm x 22cm</p>
                            <button className='btn btn-outline-secondary'>Comprar</button>
                        </div>
                    </div>
                </div>
                <div id='card-shop' className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3' style={{marginTop: 20}}>
                    <div className='card h-100 shadow'>
                        <div className='card-body'>
                            <img src={require('./images/8.jpg')} 
                                 style={{width: 250, height: 250, marginTop:20 ,marginBottom:20}} 
                                 alt='Molde 6 corazones' />
                            <h5 className='card-title'>Molde 6 corazones</h5>
                            <p className='card-text'>Tamaño: 17cm x 22cm</p>
                            <button className='btn btn-outline-secondary'>Comprar</button>
                        </div>
                    </div>
                </div>
                
                
                
                                
            </>
                  

        );
    }
}