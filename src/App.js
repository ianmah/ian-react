import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import SocialMedia from "./components/SocialMedia";
import Typed from 'react-typed';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="Header">
          <div className="left">
            <h1 className="App-title">Ian Mah</h1>
            <SocialMedia />
          </div>
          <div className="right">
                <Typed
                strings={[
                    'Aspiring Developer',
                    'Marketing Director',
                    'Photography Enthusiast']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                    <h2 className="Sub-Title"/>
                </Typed>
          </div>
        </div>
        <div className="container">
          <Posts />
        </div>
      </div>
    );
  }
}
export default App;
