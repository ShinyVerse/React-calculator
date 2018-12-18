import React, { Component } from 'react';
import Button from './components/Button/Button';
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
          <div className="counter">{this.state.count}
          </div>
          <Button plusEvent={() => { onPlus } }/>
        </header>
      </div>
    );
  }
}

export default App;
