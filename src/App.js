import './App.css';
import CardList from './components/card-list/Card-List';
import SearchBox from './components/search-box/Search-Box';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (<div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox
      className='monsters-search-box'
      placeholder="Search Monsters"
      onChangeHandler={onSearchChange}
    />
    <CardList monsters={filteredMonsters} />
  </div>)
}

export default App;
