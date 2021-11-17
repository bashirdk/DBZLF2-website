import React from 'react';
import ReactDOM from 'react-dom';
import CharacterGroup from './CharacterGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
