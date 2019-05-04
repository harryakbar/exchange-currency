import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyDetailCard from '../CurrencyDetailCard';

it('render CurrencyDetailCard without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CurrencyDetailCard
      amount={140000}
      code='IDR'
      currency='Indonesian Rupiah'
      base={10}
      deleteTargetCurrency={() => console.log('Hai')}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});
