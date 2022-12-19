import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { name } from 'tar/lib/types';

class App extends Component {
  constructor () {
    super();
    this.state = {
      name: 'User'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}, I am a React App
          </p>
          <button>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
