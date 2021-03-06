import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }) 
  }

  // trying to search all data & not just 'name';

  // render(){
  //   const filterdRobo = this.state.robots.filter(robot=> {
  //     return Object.values(robot).some(val => val.includes(this.state.searchfield.toLowerCase()))
  // })
  render(){
    const {robots, searchfield} = this.state;
    const filterdRobo = robots.filter(robot=> {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()) || robot.email.toLowerCase().includes(searchfield.toLowerCase());
    })
        
    return (
      <div className='tc'>
        <h1 className='f1'>My friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filterdRobo} />
        </Scroll>
      </div>
    );
  }
};

export default App;