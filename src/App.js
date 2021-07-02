import logo from './logo.svg';
import './App.css';

import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';

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
            </ul>
          </nav>
        </header>
        <main>
          <p>Welcome to Bandspace...2~!</p>
        </main>
      </div>
    );
  }
}

export default App;
