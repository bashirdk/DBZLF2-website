import React from 'react';
import ReactDOM from 'react-dom';
import CharacterList from './Downloads';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
