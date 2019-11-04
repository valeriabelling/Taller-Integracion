import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './component/Header';
import AgregarHerramienta from './component/AgregarHerramienta';



function App() {

    return (
        <Router>
            <Header/>
                <main className="container mt-5">
                    <Switch>
                        <Route exact path= "/nueva-herramienta" component={AgregarHerramienta}></Route>
                    </Switch>
                </main>
                <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
        </Router>
    );
}

export default App;