import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '1'
        },
        {
          name: 'Frank',
          id: '2'
        },
        {
          name: 'Jacky',
          id: '3'
        },
        {
          name: 'Sabina',
          id: '4'
        },
        {
          name: 'Dima',
          id: '5'
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return(
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
          )
        })}
      </div>
    );
  }
}
export default App;
