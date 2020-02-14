import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './Pages/Home/home'
import ContactPage from './Pages/Contact/contact'
import AboutMePage from './Pages/About/about'
import SkillPage from './Pages/Skill/skill'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about" component={AboutMePage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/skill" component={SkillPage}></Route>
          <Route exact path="/" component={HomePage}></Route>          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
