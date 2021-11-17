import CharacterStats from './CharacterStats';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterStats />, div);
  ReactDOM.unmountComponentAtNode(div);
});
