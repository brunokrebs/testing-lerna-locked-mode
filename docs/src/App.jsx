import React from 'react';
import Button from 'bk1-react-button';
import Panel from 'bk1-react-panel';
import './App.css';

const App = () => (
  [
    <h1>Auth0 React Components</h1>,
    <Panel>
      <p className="App-intro">
        <Button text="I'm a simple button" onClick={() => console.log('button clicked')} />
      </p>
    </Panel>,
  ]
);

export default App;
