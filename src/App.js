import React, { Component } from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';
import Search from './search';
import Results from './results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
    //this.setSearch = this.setSearch.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  /*setSearch(event) { // Update on each key press. Extreme!
    this.setState({search: event.target.value});
  }*/

  onKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.setState({search: event.target.value});
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='m-2'>
          <h1 className='text-center'>Newcastle Planning Applications Portal</h1>
          <Search update={this.setSearch} keydown={this.onKeyPress} />
          <Results search={this.state.search} key={this.state.search} />
        </div>
      </div>
    );
  }
}

export default App;
