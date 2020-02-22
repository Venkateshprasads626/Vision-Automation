import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './screens/Home'
import products from './screens/products'
import Contact from './screens/Contact'
import Aboutus from './screens/Aboutus'

import Motherboard from './Pages/Motherboard'
import Monitor from './Pages/Monitor'
import Printers from './Pages/Printers'
import computerperipherals from './Pages/computerperipherals'
import Projector from './Pages/Projector'
import Networking from './Pages/Networking'
import Cables from './Pages/Cables'
import Lifestyle from './Pages/Lifestyle';
import Servers from './Pages/Servers'
import Graphicscard from './Pages/Graphicscard';
import POS from './Pages/POS'
import Software from './Pages/Softwares'


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={products} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Aboutus" component={Aboutus} />

          <Route path="/Motherboard" component={Motherboard} />
          <Route path="/Monitor" component={Monitor} />
          <Route path="/Printers" component={Printers} />
          <Route path="/computerperipherals" component={computerperipherals} />
          <Route path="/projector" component={Projector} />
          <Route path="/Networking" component={Networking} />
          <Route path="/Cables" component={Cables} />
          <Route path="/Lifestyle" component={Lifestyle} />
          <Route path="/Servers" component={Servers} />
          <Route path="/Graphicscard" component={Graphicscard} />
          <Route path="/POS" component={POS} />
          <Route path="/Software" component={Software} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
