import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom"

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pelicula from "./components/Pelicula/Pelicula";
import Favoritos from "./components/Favoritos/Favoritos";
import Result from "./components/Result/Result";
import Vertodas from "./components/Vertodas/Vertodas";
import Notfound from "./components/Notfound/Notfound";

function App() {
  return (
    
    <React.Fragment>
      <section><h1>HOLA</h1>
      <Header />
      </section>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Footer" component={Footer} />
        <Route path="/Header" component={Header} />
        <Route path="/Pelicula" component={Pelicula} />
        <Route path="/Favoritos" component={Favoritos} />
        <Route path="/Result" component={Result} />
        <Route path="/Vertodas" component={Vertodas} />
        <Route path="/Notfound" component={Notfound} />
      </Switch>
    </React.Fragment>
  );
}
export default App;
