import React, {Component} from 'react';
import './App.css';

import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import Home from './Components/Home/Home';
import Bands from './Components/Bands/Bands';
import About from './Components/About/About';
// import UserProfile from './Components/UserProfile/UserProfile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // user: null,
      // bands: null,
// NEED TO ENTER MORE INFO THERE.
    }
  }
  render() {
    return (
      <div className="App">
        <header>
        <h1>Bandspace</h1>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
              <li><Link to='/login'>Log In</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Route exact path="/" render={() => 
            <Home />
          } />
          <Route path="/bands" render={() =>
            <Bands
              band_name ={this.state.band_name}
            />
          } />
          <Route path="/about" render={() => 
            <About />
          } />
        </main>
      </div>
    );
  }
}

export default App;
