import React, { Component } from 'react';
import Button from './components/Button/Button';
import Calculator from './components/Calculator/Calculator';

import './App.css';

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        total: 0,
        sum: []
      }
    }

    onPlus = () => {
      let newCount = this.state.total + parseInt(this.state.sum.join(""));
      this.setState({total: newCount, sum: []});
    }

    onMinus = () => {
      let newCount = this.state.total - parseInt(this.state.sum.join(""));
      this.setState({total: newCount, sum: []});
    }

    printValue = (el) => {
      this.setState({ sum: [...this.state.sum, el.target.value] })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="counter">{this.state.total}
          </div>
          <div className="sum">{this.state.sum || ""}
          </div>
          <div className="Calc--Numbers">
            <Calculator printValue={this.printValue}/>
          </div>
          <Button actionEvent={this.onPlus} innerHtml="+"/>
          <Button actionEvent={this.onMinus} innerHtml="-"/>
        </header>
      </div>
    );
  }
}

export default App;
