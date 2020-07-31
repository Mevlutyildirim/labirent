import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Computer from './screens/computer';
import Singular from './screens/singular';
import Multiple from './screens/multiple';
import Header from './screens/components/header';

function Main(){
  return(
    <Switch>
      <Route exact  path="/" component={Computer}/>
      <Route path="/singular" component={Singular}/>
      <Route path="/Multiple" component={Multiple}/>
    </Switch>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
