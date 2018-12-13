import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        count: 0
      }
    }

    onPlus = () => {
      let newCount = this.state.count + 1;
      this.setState({count: newCount});
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div> {this.state.count}
          </div>
          <button onClick={this.onPlus} >+</button>
        </header>
      </div>
    );
  }
}

export default App;
