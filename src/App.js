import React, {Component} from 'react';
import './App.css';

import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import Bands from './Components/Bands/Bands';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
          <p>Welcome to Bandspace...2~!</p>
          <Route path="/bands" render={() =>
            <Bands
              band_name ={this.state.band_name}
            />
          } />
        </main>
      </div>
    );
  }
}

export default App;
