import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import { MyMap } from './map';

class App extends Component {
  constructor() {
    super();

    this.state = {
      households: [],
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));

    fetch('http://quimilar.herokuapp.com/api/v1/households/all')
    .then(response => response.json())
    .then(households => this.setState({ households: households }));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField, households } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <MyMap households={households}/>
        <SearchBox
          placeholder = "Search monsters"
          handleChange = {this.handleChange}
        />
        < CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
