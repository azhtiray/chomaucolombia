import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "../login/login"
import Inicio from "../index/index";
import PrivateRoute from "../auth/privaterouter";
import empleados from '../empleados/inicio-empleados'
import productos from "../productos/inicio-productos";

export default function AppRoutes() {

    return (
        <Router>
            <Switch>
                <PrivateRoute exact path={["/empleados"]} component={ empleados} />
                <PrivateRoute exact path={["/productos"]} component={ productos} />
                <Route exact path={["/login"]} component={ Login } />
                <Route exact path={["/", "/index"]} component={Inicio} />
                <Route path={"*"} component={  () => (

                    <h1 style={{ marginTop: 300 }}>
                        400
                        <br />
                        Página no encontrada
                    </h1>
                )} />
            </Switch>
        </Router>
    );
}


// function Home() {
//     return (<div style={{ marginTop: 300 }}><h2>Home</h2></div>);



