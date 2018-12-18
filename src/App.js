import React, { Component } from 'react';
import Button from './components/Button/Button';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        count: 0
      }
      this.onPlus = this.onPlus.bind(this);
    }

    onPlus = () => {
      let newCount = this.state.count + 1;
      this.setState({count: newCount});
    }

    onMinus = () => {
      let newCount = this.state.count - 1;
      this.setState({count: newCount});
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="counter">{this.state.count}
          </div>
          <Button actionEvent={this.onPlus} innerHtml="+"/>
          <Button actionEvent={this.onMinus} innerHtml="-"/>
        </header>
      </div>
    );
  }
}

export default App;
