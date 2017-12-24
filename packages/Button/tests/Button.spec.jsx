import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/Button';

describe('Clock', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button onClick={() => (true)} text="Testing" />, div);
  });
});
