import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 999 };
  }
  render() {
    return (
      <div className="App">
        <header className="App-body">
          <div>
            <p>{this.state.num}</p>
          </div>
          <form>
            <label htmlFor="max">max: </label>
            <input type="text" />
            <br></br>
            <label htmlFor="min">min: </label>
            <input type="text" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
