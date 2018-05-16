import React, { Component } from 'react';
import './App.css';
import Header from './components/header';

export default class App extends Component {
 
  render() {
     
     return (
      <div className="App">
        <Header route={this.props.location.pathname}/>
        {
            this.props.children
        } 
      </div>
    );
  }
}

