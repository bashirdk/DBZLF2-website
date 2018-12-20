import React from 'react';
import ReactDOM from 'react-dom';
import CharacterPage from './CharacterPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
