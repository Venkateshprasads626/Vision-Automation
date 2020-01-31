import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './screens/Home'
import products from './screens/products'


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={products} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
