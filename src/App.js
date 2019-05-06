import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { SAMPLE_TARGET_CURRENCIES, CURRENCIES } from './constants/constant';
import CurrencyDetailCard from './components/CurrencyDetailCard';
import { getUSDBaseCurrency } from './services/api';

function App() {
  const [base] = useState(10.00);
  const [asyncData, setAsyncData] = useState({});
  const [targetCurrencies, setTargetCurrencies] = useState(SAMPLE_TARGET_CURRENCIES);
  const { code: USDCode, currency: USDcurrency } = CURRENCIES.USD;

  useEffect(() => {
    const result = getUSDBaseCurrency();
    setAsyncData(result.data);
  }, []);

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
        {targetCurrencies.map(currency => (
          <CurrencyDetailCard
            key={currency.code}
            amount={currency.amount}
            code={currency.code}
            currency={CURRENCIES[currency.code].currency}
            base={base}
            deleteTargetCurrency={() => deleteTargetCurrency(currency.code)}
          />
        ))}
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
