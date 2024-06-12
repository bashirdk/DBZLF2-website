import React from 'react';
import ReactDOM from 'react-dom';
import BackgroundList from './BackgroundList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BackgroundList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
