// App Fundamentals
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components

import AllKegs from './components/AllKegs';
// import Keg from './components/Keg';
import AboutApp from './components/AboutApp';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path='/' component={AllKegs} />
           <Route exact path='/aboutapp' component={AboutApp} />

      </Switch>
    </div>
  );
}

export default App;
