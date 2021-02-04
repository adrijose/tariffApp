import './App.css';
import Search from './Pages/Search';
import List from './Pages/List';
import Detail from './Pages/Detail';
import {Route} from 'wouter';
import React from 'react';
import { TarifasContext } from './context/tarifas';


function App() {
 
  return (
    <div className="App">
    <TarifasContext>
      <Route path="/" component={Search}></Route>
      <Route path="/result/:GB" component={List}></Route>
      <Route path="/detail/:id" component={Detail}></Route>
    </TarifasContext>
    </div>
  );
}

export default App;
