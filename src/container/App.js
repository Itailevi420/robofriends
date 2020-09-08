import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';
import { setSearchField } from '../action';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filterdRobo = robots.filter((robot) => {
      return (
        robot.name.toLowerCase().includes(searchField.toLowerCase()) ||
        robot.email.toLowerCase().includes(searchField.toLowerCase())
      );
    });

    return (
      <div className="tc">
        <h1 className="f1">My friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filterdRobo} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
