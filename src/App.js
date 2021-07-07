import React, {Component} from 'react';
import './App.css';

import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import Home from './Components/Home/Home';
import Bands from './Components/Bands/Bands';
import About from './Components/About/About';
import UserProfile from './Components/UserProfile/UserProfile';
// import UserProfile from './Components/UserProfile/UserProfile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      bands: [],
// NEED TO ENTER MORE INFO THERE.
    }
  }

  async componentDidMount() {
    const users = await axios('http://localhost:8000');
    const bands = await axios(`http://localhost:8000/bands`);

    this.setState({
      user: users,
      bands: [bands],
    })
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
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Route exact path="/" render={() => 
            <Home />
          } />
          <Route path="/profile" render={() =>
            <UserProfile 
              user={this.state.user}
              bands={this.state.bands}
            />
          } />
          <Route path="/bands" render={() =>
            <Bands
              bands = {this.state.bands}
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

export default withRouter(App);
