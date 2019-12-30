import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './bootstrap.min.css';
import Header from './components/Header';
import AgregarHerramienta from './components/AgregarHerramienta';
import Login from './components/Login';


function App() {

  const [guardarRecargaHerramientas] = useState(true)

  return (
    <Router>
        <Header/>
          <main className="container mt-5">
          <Switch>
              <Route exact path= "/login" render={() => ( 
                  <Login/>
                )}
              />
              <Route exact path= "/nueva-herramienta" render={() => ( 
                  <AgregarHerramienta
                  guardarRecargaHerramientas = {guardarRecargaHerramientas}/>
                )}
              />
            </Switch>
          </main>
          <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
    </Router>
  );
}

export default App;
