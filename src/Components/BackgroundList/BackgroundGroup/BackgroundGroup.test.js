import React from 'react';
import ReactDOM from 'react-dom';
import BackgroundGroup from './BackgroundGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BackgroundGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
