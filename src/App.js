import React from 'react';
import {CardList} from './components/card-list/card-list.component'
import './App.css';



class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchFelid: ''
    }

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }    

  render() {
    const {monsters, searchFelid} = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFelid.toLowerCase())
    )
    return (
      <div className="App">
      <input 
        type='search' 
        placeholder="Search Monsters"
        onChange={e => this.setState({searchFelid: e.target.value})} 
      >
      </input>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
