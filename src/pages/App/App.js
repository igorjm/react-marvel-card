import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import { Layout } from '../../components';
// screens
import Home from '../Home';
import Character from '../Character';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/:id" component={Character} />
          <Route component={() => 'Oops! 404!'} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
