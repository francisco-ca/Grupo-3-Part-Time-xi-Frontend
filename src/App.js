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
import OlvideContraseña from './js/views/OlvideContraseña'
import ListaEspera from './js/components/ListaEspera';
import AdmListaEspera from './js/views/Adm_Lista_Espera';
import Registro from "./js/views/Registro"
import Restaurantes from './js/views/Restaurantes';
import NuevoRestaurante from './js/views/NuevoRestaurante';
import EditarRestaurante from './js/views/editarRestaurante';
import Dashboard from './js/views/Dashboard';
import CierraSesion from './js/views/CierraSesion';
import RestablecerContraseña from './js/views/RestablecerContraseña';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component= {Inicio}/>
          <Route exact path="/home" component= {Inicio}/>
          <Route exact path="/lista_espera/:id" component= {ListaEspera}/>
          <Route exact path="/adm_lista_espera" component= {AdmListaEspera}/>
          <Route exact path="/restaurantes" component= {Restaurantes}/>
          <Route exact path="/registro" component= {Registro}/>
          <Route exact path="/ingreso" component= {Ingreso}/>
          <Route exact path="/nuevo_restaurante" component= {NuevoRestaurante}/>
          <Route exact path="/restaurantes/:id/editar" component= {EditarRestaurante}/>
          <Route exact path="/olvide_contraseña" component= {OlvideContraseña}/>
          <Route exact path="/restablecer_contraseña/:token" component= {RestablecerContraseña}/>
          <Route exact path="/dashboard" component= {Dashboard}/>
          <Route exact path="/cierra-sesion" component= {CierraSesion}/>
          
        </Switch>
      </BrowserRouter> 
    </>
  );
}

export default injectContext(App);