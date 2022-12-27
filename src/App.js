import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/Card-List';
import SearchBox from './components/search-box/Search-Box';
import { useState } from 'react';

const App = () => {

  const [ searchField, setSearchField] = useState('');
  console.log(searchField);

   const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  
  return (<div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox
      className='monsters-search-box'
      placeholder="Search Monsters"
      onChangeHandler={onSearchChange}
    />
    {/* <CardList monsters={filteredMonsters} /> */}
  </div>)
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   }


//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
     
//     );
//   }
// }

export default App;
