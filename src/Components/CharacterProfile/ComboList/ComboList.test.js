import React from 'react';
import ReactDOM from 'react-dom';
import ComboList from './ComboList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComboList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
