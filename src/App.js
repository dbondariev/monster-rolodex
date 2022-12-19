import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'James', lastName: 'Bond' },
      occupation: 'Speacial Agent'
    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi my name is {this.state.name.firstName} {this.state.name.lastName}, I am a {this.state.occupation}
          </p>
          <button onClick={() => {
            this.setState({ name: { firstName: 'Dima', lastName: 'Bondariev' }, occupation: 'Frontend Developer' })
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
