import React from 'react';
import ReactDOM from 'react-dom';
import AddCurrency from '../AddCurrency';

function doNothing() {
  return false;
}

it('render AddCurrency without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AddCurrency onSubmit={doNothing}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
