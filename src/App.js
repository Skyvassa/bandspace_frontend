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
import SignupBand from './Components/SignupBand/SignupBand';
import Messages from './Components/Messages/Messages';
import MessagePost from './Components/MessagePost/MessagePost'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      bands: [],
      messages: [],
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

    const bands = await axios(`http://localhost:8000/bands/`);
    console.log(bands);

    const messages = await axios('http://localhost:8000/messages/');
    console.log(messages);

    const collectedUser = {id: users.data[0].pk, ...users.data[0].fields}

    const collectedBands = bands.data.map(band => {
      const collectedBands = {id: band.pk, ...band.fields}
      return collectedBands
    })

    const collectedMessages = messages.data.map(message => {
      const collectedMessages =  {id: message.pk, ...message.fields}
      return collectedMessages
    })

    this.setState({
      user: collectedUser,
      bands: collectedBands,
      messages: collectedMessages,
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

  createMessage = async (evt, messageContent) => {
    evt.preventDefault();
    console.log(this.state.messages)
    console.log(this.state.messages.id)
    const response = await axios.post(`http://localhost:8000/messages/${this.state.messages.id}`, {data:messageContent});
    const newMessage = {id:response.data[0].pk, ...response.data[0].fields}

    const messages = this.state.messages;
    messages.push(newMessage)

    this.setState({
      messages
    })
    this.props.history.push('/messages')
  }

  createBand = async (evt, bandContent) => {
    evt.preventDefault();

    const response = await axios.post(`http://localhost:8000/bands/${this.state.user.id}/`, {data:bandContent});
    const newBand = {id:response.data[0].pk, ...response.data[0].fields}

    const bands = this.state.bands;
    bands.push(newBand);

    this.setState({
      bands
    })
    this.props.history.push('/bands');
  }

  createUser = async (evt, userProfile) => {
    evt.preventDefault();

    const response = await axios.post(`http://localhost:8000/profile/${this.state.user.id}/`, {data:userProfile});
    console.log(response.data[0].fields)
    const newUser = {id:response.data[0].pk, ...response.data[0].fields}
    console.log(newUser);
    const users = [this.state.user];
    console.log(users)
    users.push(newUser);

    this.setState({
      users
    })
    this.props.history.push('/profile');
  }

  deleteMessage = async (evt, userProfile) => {
    evt.preventDefault();

    const response = await axios.delete(`http://localhost:8000/messages/${this.state.messages.id}/`, {data:userProfile});
    const deletedUser = [{id:response.data[0].pk, ...response.data[0].fields}]

    const users = this.state.users;

    users.push(deletedUser);

    this.setState({
      users
    })
    this.props.history.push('/profile')
  }


  render() {
    return (
      <div className="App">
        <header>
        <h1 className='homelink'><Link to= '/'>BandSpace</Link></h1>
          <nav>
            <ul>
              <li><Link to='/signup'>Sign Up</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to ='/bands'>Bands</Link></li>
              <li><Link to='/messages'>Message Board</Link></li>
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
              messages={this.state.messages}
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
            <Signup createUser={this.createUser}/>
          } />
          <Route path='/bandsignup' render ={() => 
            <SignupBand createBand={this.createBand}/>
          } />
          <Route exact path='/messages' render ={() =>
            <Messages 
              messages={this.state.messages}
              createMessage={this.createMessage}
            />
          } />
          <Route path='/messages/new' render ={() =>
            <MessagePost createMessage={this.createMessage}/>
          } />
        </main>
        <footer className='footer'>
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
