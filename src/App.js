import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      robots: robots
    }
  }

  render() {
    return (
      <div>
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={this.state.robots} />
      </div>
    )
  }
}

export default App;
