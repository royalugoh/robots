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
  handleSearch = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  render() {
    const { robots, searchInput } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchInput.toLowerCase());
    })
    return (
      <div>
        <h1>RoboFriends</h1>
        <SearchBox inputField={this.state.searchInput}
        handleChange={this.handleSearch} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App;
