import React, { Component } from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path='/Contact' component={Contact} />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
