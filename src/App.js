import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import SideMenu from './Components/SideMenu/SideMenu';
import Login from './Components/Login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ height: "100%", width: "100%" }}>
          <Switch>
            <Route path="/" component={Login} exact={true} />
            <Route path="/sideMenu" component={SideMenu} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
