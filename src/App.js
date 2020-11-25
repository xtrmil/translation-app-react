import Register from './components/containers/Register';
import Translation from './components/containers/Translation';
import History from './components/containers/Translation';
import NotFound from './components/containers/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {



  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/translation" component={Translation} />
          <Route path="/history" component={History} />
          <Route path="*" component={NotFound} />
        </Switch>
    </div>
     </Router>
  );
}

export default App;