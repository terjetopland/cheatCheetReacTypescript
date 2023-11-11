import React from 'react';
import './App.css';
import { Setup } from './components/typeScriptReactSetup/TypeScriptReactSetup';

const App = () =>{
  return (
    <div className="App">
      <header >
        <div style={{fontWeight: 'bold', fontSize: 25, margin: 20}}>Learn-code</div>
      </header>
      <body>
        <Setup/>
      </body>
    </div>
  );
}

export default App;
