import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { currencies, SAMPLE_TARGET_CURRENCIES } from './constants/constant';
import CurrencyDetailCard from './components/CurrencyDetailCard';

function App() {
  const [base] = useState(10.00);
  const [targetCurrencies, setTargetCurrencies] = useState(SAMPLE_TARGET_CURRENCIES);
  const { code: USDCode, currency: USDcurrency } = currencies.USD;

  const deleteTargetCurrency = (code) => 
    setTargetCurrencies([...targetCurrencies].filter(currency => currency.code !== code));

  return (
    <Wrapper>
      <Header
        title={`${USDCode} - ${USDcurrency}`}
        currency={USDCode}
        base={`${base}`}
      />
      <Content>
        {
          targetCurrencies.map(currency => (
            <CurrencyDetailCard
              key={currency.code}
              amount={currency.amount}
              code={currency.code}
              currency={currencies[currency.code].currency}
              base={base}
              deleteTargetCurrency={() => deleteTargetCurrency(currency.code)}
            />
          ))
        }
      </Content>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }
`;

const Content = styled.div`
  padding: 1rem;
  flex-direction: column;
`;
