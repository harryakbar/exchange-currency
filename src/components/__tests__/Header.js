import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';

it('render Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Header 
      title="USD - United States Dollars"
      currency="USD"
      base="10.00"
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});
