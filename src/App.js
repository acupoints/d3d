import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// 
// import BarChart from './components/BarChart'
import List from './components/List'


// 
class App extends Component {
  
    state = {
      data: [12, 5, 6, 6, 9, 10],
      width: 700,
      height: 500,
      id: "root"
    }
  
    render() {
      return (
        <div className="App">
          {/* <BarChart data={this.state.data} width={this.state.width} height={this.state.height} /> */}
          <div className="container">
            <List />
          </div>
        </div>
      );
    }
  }

export default App;
