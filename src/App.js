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
import Unapelicula from "./components/Unapelicula/Unapelicula";
import Notfound from "./components/Notfound/Notfound";
import Buscador from "./components/Buscador/Buscador";


function App() {
  return (
    
    <React.Fragment>
      <Header />
<div className="body">




      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Footer" component={Footer} />
        <Route path="/Header" component={Header} />
        <Route path="/Pelicula" component={Pelicula} />
        <Route path="/Pelicula/id/:id" component={Unapelicula} />
        <Route path="/Favoritos" component={Favoritos} />
        <Route path="/Result" component={Result} />
        <Route path="/Vertodas/:vertodas" component={Vertodas} />
        <Route path="/Buscador" component={Buscador} />
        <Route path="" component={Notfound} />
      </Switch>

    </div>

      <Footer />
    </React.Fragment>
  );
}
export default App;
