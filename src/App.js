import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route
            exact path="/users/:id"
            render={(props) => <Users {...props} greetingsMessage="Good Morning" />}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route
            exact path="/strictacess"
            render={(props) => <StrictAccess {...props} user="Welcome" />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
