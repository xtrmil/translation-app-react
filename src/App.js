import Register from './components/containers/Register';
import Translation from './components/containers/Translation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React from 'react';
import './App.css';
// import {iniateSignsMap} from './canvas/inputconverter';

function App() {

  //const signs = iniateSignsMap();

  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/translation" component={Translation} />
        </Switch>
    </div>
     </Router>
  );
}

export default App;