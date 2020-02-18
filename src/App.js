// App Fundamentals
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components

import AllKegs from './components/AllKegs';
// import Keg from './components/Keg';
import AboutApp from './components/AboutApp';
import NewKegForm from './components/NewKegForm';

import Header from './components/Header';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path='/' component={AllKegs} />
           <Route exact path='/aboutapp' component={AboutApp} />
          <Route exact path='/newkegform' component={NewKegForm} />


      </Switch>
    </div>
  );
}

export default App;
