import React from 'react';
import ReactDOM from 'react-dom';
import MoveList from './MoveList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoveList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
