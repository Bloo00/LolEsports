import React, { Component } from 'react'
import './App.css';
// import Showcase from './Showcase';
import Blog from './Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Showcase /> */}
        <Blog />
      </div>
    )
  }
}

export default App;
