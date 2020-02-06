import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './screens/Home'
import products from './screens/products'
import Contact from './screens/Contact'


import Moniter from './Pages/Moniter'


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={products} />
          <Route path="/Contact" component={Contact} />
          

          <Route path="/Moniter" component={Moniter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
