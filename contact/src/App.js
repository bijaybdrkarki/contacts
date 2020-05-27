import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contactform from './components/contactform'
import Editform from './components/editform'
import './App.css';
import Contactlist from './components/contactlist';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' exact component={Contactlist} />
          <Route path={`/add`} component={Contactform} />
          <Route path={`/edit/:id`} component={Editform} />
        </Switch>
    </Router> 
  )
}

export default App;
