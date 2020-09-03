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
    return (
      <div className="App">
      <input 
        type='search' 
        placeholder="Search Monsters"
        onChange={e => this.setState({searchFelid: e.target.value}, () => console.log(this.state))} >
      </input>
        <CardList monsters={this.state.monsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
