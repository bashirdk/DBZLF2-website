import React from 'react';
import ReactDOM from 'react-dom';
import LittleFighter2 from './LittleFighter2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LittleFighter2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
