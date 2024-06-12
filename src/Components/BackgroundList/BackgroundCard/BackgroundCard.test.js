import React from 'react';
import ReactDOM from 'react-dom';
import BackgroundCard from './BackgroundCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BackgroundCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
