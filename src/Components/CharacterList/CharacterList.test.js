import React from 'react';
import ReactDOM from 'react-dom';
import CharacterList from './CharacterList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
