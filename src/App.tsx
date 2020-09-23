import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <footer className="footer" />
        </Router>
      </div>
    );
  }
}

export default App;
