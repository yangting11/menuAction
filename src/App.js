import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Layout from './components/layout/layout'
import Home from './pages/home/home'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
