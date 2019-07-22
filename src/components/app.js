import React, { Component } from 'react';
import Header from './header';
//import Navbar from "./navbarpage"
//import HeaderLinks from "./header/HeaderLinks.jsx";
class App extends Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div style={{ backgroundColor:"black"}}>
        <Header 
        
        />
        <div className="columns is-gapless" style={{ position:"absolute", height:"100%", width:"100%", backgroundColor:"black"}}>
          <div className="column is-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
