import React, { Component } from 'react';
//import { robots } from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({robots: data}))
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
    return !robots.length ?
    <h1 className='tc'> Loading </h1> :
     (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox inputField={this.state.searchInput}
        handleChange={this.handleSearch} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
}

export default App;
