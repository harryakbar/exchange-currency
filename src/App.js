import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import AddCurrency from './components/AddCurrency';
import CurrencyDetailCard from './components/CurrencyDetailCard';

import { getUSDBaseCurrency } from './services/api';
import { CURRENCIES } from './constants/constant';

function App() {
  const [base] = useState(10.00);
  const [asyncData, setAsyncData] = useState(null);
  const [targetCurrencies, setTargetCurrencies] = useState([]);

  const { code: USDCode, currency: USDcurrency } = CURRENCIES.USD;

  useEffect(() => {
    async function fetchData() {
      const response = await getUSDBaseCurrency();
      setAsyncData(response.data);
    }
    fetchData();
  }, []);
  
  const addTargetCurrency = (code) => {
    if(![...targetCurrencies].filter(currency => currency.code === code).length) {
      setTargetCurrencies([...targetCurrencies, {
        code: code,
        amount: asyncData.rates[code],
      },]);
    }
  }

  const deleteTargetCurrency = (code) => 
    setTargetCurrencies([...targetCurrencies].filter(currency => currency.code !== code));

  return (
    <Wrapper>
      <Header
        title={`${USDCode} - ${USDcurrency}`}
        currency={USDCode}
        base={`${base.toFixed(4)}`}
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
        {asyncData ? <AddCurrency onSubmit={addTargetCurrency} /> : "Loading"}
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
