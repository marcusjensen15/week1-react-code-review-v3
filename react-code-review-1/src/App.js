// App Fundamentals
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components

import AllKegs from './components/AllKegs';
import Keg from './components/Keg';


function App() {
  return (
    <div>
      <Switch>
         <Route exact path='/' component={AllKegs} />
      </Switch>
    </div>
  );
}

export default App;
