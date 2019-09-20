import React, { Component } from 'react';
import './Css/General.css';

import Main from "./Components/Main"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"



class App extends Component{
  constructor(props) {
    super(props);
    this.state= {
      test: [],
      loggedInUser: {
        username: '',
        id: ''
    }
  }
}
  setLoggedInUser = async (user) => {
    this.setState((prevState) => ({
      loggedInUser: {
        username: user.username,
        id: user.id
      }
  }))
  }

  render() {
    return (
      <div className= "App">
      <Nav loggedInUser= {this.state.loggedInUser} />
      <Main setLoggedInUser= {this.setLoggedInUser} />
      <Footer />
      </div>
    )
  }
}

export default App;
