import React from 'react';
import ReactDOM from 'react-dom';
import DragonBall from './DragonBall';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DragonBall />, div);
  ReactDOM.unmountComponentAtNode(div);
});
