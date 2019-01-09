import StatBar from './StatBar';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
