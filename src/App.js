import React from 'react';
import injectContext from './js/store/appContext'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter, Switch, Route} from 'react-router-dom'

//Componentes
import Inicio from './js/views/Inicio'
import Ingreso from './js/views/Ingreso'
import RecuperaContraseña from './js/views/RecuperaContraseña'
import ListaEspera from './js/views/ListaEspera';
import AdmListaEspera from './js/views/Adm_Lista_Espera';
import Registro from "./js/views/Registro"
import Restaurantes from './js/views/Restaurantes';
import NuevoRestaurante from './js/views/NuevoRestaurante';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component= {Inicio}/>
          <Route exact path="/lista_espera" component= {ListaEspera}/>
          <Route exact path="/adm_lista_espera" component= {AdmListaEspera}/>
          <Route exact path="/restaurantes" component= {Restaurantes}/>
          {/* <Route exact path="/registrarse" component= {SignUp}/> */}
          <Route exact path="/registro" component= {Registro}/>
          <Route exact path="/ingreso" component= {Ingreso}/>
          <Route exact path="/contraseña" component= {RecuperaContraseña}/>
          <Route exact path="/nuevo_restaurante" component= {NuevoRestaurante}/>
        </Switch>
      </BrowserRouter> 
    </>
  );
}

export default injectContext(App);