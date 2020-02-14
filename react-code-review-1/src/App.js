// App Fundamentals
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import AllKegs from './components/AllKegs';
import Keg from './components/Keg';
// import Careers from './components/Careers';
// import Locations from './components/AboutUs';

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
