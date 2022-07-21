import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () =>  {
 
    return (
      <div className="grid justify-center align-center h-screen bg-gradient-to-b from-purple-900 to-purple-500">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <footer className="footer" />
        </Router>
      </div>
    );
  
}

export default App;
