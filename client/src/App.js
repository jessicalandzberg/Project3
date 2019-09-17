import React, { Component } from 'react';
import './Css/General.css';

import Main from "./Components/Main"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import HomeButton from "./Components/HomeButton"

class App extends Component{
  constructor(props) {
    super(props);
    this.state= {
      test: []
    }
  }
  render() {
    return (
      <div className= "App">
      <Nav />
      <HomeButton />
      <Main />
      <Footer />
      </div>
    )
  }
}

export default App;
