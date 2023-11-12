import React from 'react';
import './App.css';
import { Setup } from './components/typeScriptReactSetup/TypeScriptReactSetup';

const App = () =>{
  return (
    <div className="App">
      <header >
        <h1>Learn-code</h1>
        <div style={{color: 'rgb(250, 30, 30)', fontSize: 22}}>
          Since I have found out that create-react-app is "dead", I will update the project to Next.js
          </div>
      </header>
      <Setup/>
    </div>
  );
}

export default App;
