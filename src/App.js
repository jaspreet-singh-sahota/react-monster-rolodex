import React from 'react';
import {CardList} from './components/card-list/card-list.component'
import {Searchbox} from './components/input/input.component'
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
  
  handleChange = (e) => (
    this.setState({ searchFelid: e.target.value })
  )

  render() {
    const {monsters, searchFelid} = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFelid.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox
          placeholder="Search Monsters"
          handleChange={this.handleChange} >
        </Searchbox>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
