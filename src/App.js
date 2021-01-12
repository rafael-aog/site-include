import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import IncludeHeader from './IncludeHeader';
import Events from './Events';
import Reasons from './Reasons';
import Services from './Services';
import Depoiments from './Depoiments';
import Content from './Content';
import Contacts from './Contacts';
import WhoWeAre from './WhoWeAre';
import VMVContent from './VMVContent';
import Members from './Members';
import MEJContent from './MEJContent';

function App() {
  return (
    <div className="App">
      <Router>
        <IncludeHeader />
        <Switch>
          <Route path="/sobrenos">
            <WhoWeAre />
            <VMVContent />
            <Members />
            <MEJContent />
          </Route>
          <Route path="/">
            <Events />
            <Reasons />
            <Services />
            <Depoiments />
            <Content />
          </Route>
        </Switch>
        <Contacts />
      </Router>
      <footer>
        Include Engenharia - 2020 - @All Right reserved
      </footer>
    </div>
  );
}

export default App;
