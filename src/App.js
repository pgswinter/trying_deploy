import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<p>Hey! I stayed on server! Thanks man!
        How to deploy app to githubs pages:
        1. Go to github enables GitHubPages
        2. Change source to gh-pages branch
        3. Install npm run gh-pages --save-dev
        4. Copy this code to '"script": in package.json
        "predeploy": "npm run build",
    	"deploy": "gh-pages -d build"
    	5. npm run deploy
    	6. Go to address: https://pgswinter.github.io/name_of_github/ and Enjoy!</p>
      </div>
    );
  }
}

export default App;
