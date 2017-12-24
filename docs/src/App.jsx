import React from 'react';
import Button from '../../packages/Button/src/Button';
import Panel from '../../packages/Panel/src/Panel';
import './App.css';

const App = () => (
  <Panel>
    <p className="App-intro">
      <Button text="I'm a simple button" onClick={() => console.log('button clicked')} />
    </p>
  </Panel>
);

export default App;
