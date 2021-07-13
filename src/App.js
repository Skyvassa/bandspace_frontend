import React, {Component, useState} from 'react';
import './App.css';

import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import Home from './Components/Home/Home';
import Bands from './Components/Bands/Bands';
import About from './Components/About/About';
import UserProfile from './Components/UserProfile/UserProfile';
import Support from './Components/Support/Support';
import Signup from './Components/Signup/Signup';
import SignupBand from './Components/SignupBand/SignupBand'
// import UserProfile from './Components/UserProfile/UserProfile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      bands: [],
// NEED TO ENTER MORE INFO THERE.
    }
  }

  getLikedBands = async id => {
    const likedBands = await axios(`http://localhost:8000/profile/${id}/bands/`);

    const likedBandIds = likedBands.data.map(band => band.fields.band);

    return likedBandIds
  }

  async componentDidMount() {
    const users = await axios('http://localhost:8000/');
    console.log(users);

    // const likedBandIds = await this.getLikedBands(users.data[0].pk);
    // const collectedUser = { id: users.data[0].pk, ...users.data[0].fields, likedBands: likedBandIds};

    const bands = await axios(`http://localhost:8000/bands/`);
    console.log(bands);

    const collectedUser = {id: users.data[0].pk, ...users.data[0].fields}

    const collectedBands = bands.data.map(band => {
      const collectedBands = {id: band.pk, ...band.fields}
      return collectedBands
    })

    this.setState({
      user: collectedUser,
      bands: collectedBands,
    })
  }

  updateBand = async id => {
    const likedBand = await axios(`http://localhost:8000/bands/${id}/${this.state.user.id}/`)

    const updatedBands = this.state.bands.map(band => 
      band.id === id ? { id: likedBand.data[0].pk, ...likedBand.data[0].fields } : band
      )

    const likedBandIds = await this.getLikedBands(this.state.band.id);

    const user = this.state.user;
    user.likedBands = likedBandIds;

    this.setState({
      bands: updatedBands,
      user
    })
  }


  render() {
    return (
      <div className="App">
        <header>
        <h1>BandSpace</h1>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
              <li><Link to='/login'>Log In</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to ='/bands'>Bands</Link></li>
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
              updateBand={this.updateBand}
            />
          } />
          <Route path="/bands" render={() =>
            <Bands
              bands = {this.state.bands}
              updateBand = {this.updateBand}
            />
          } />
          <Route path="/about" render={() => 
            <About />
          } />
          <Route path='/support' render={() =>
            <Support />
          } />
          <Route path="/signup" render={() => 
            <Signup />
          } />
          <Route path='bandsignup' render ={() => 
            <SignupBand />
          } />
        </main>
        <footer>
          <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/support'>Support</Link></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
