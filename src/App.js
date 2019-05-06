import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { CURRENCIES, CURRENCY_LIST } from './constants/constant';
import CurrencyDetailCard from './components/CurrencyDetailCard';
import { getUSDBaseCurrency } from './services/api';

function App() {
  const [base] = useState(10.00);
  const [asyncData, setAsyncData] = useState(null);
  const [targetCurrencies, setTargetCurrencies] = useState([]);
  const { code: USDCode, currency: USDcurrency } = CURRENCIES.USD;

  useEffect(async () => {
    const result = await getUSDBaseCurrency();
    setAsyncData(result.data);
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
        <label>
          <select value={"Hai"} onChange={(event) => addTargetCurrency(event.target.value)}>
            {CURRENCY_LIST.map(currencyOption => (
              <option
                key={CURRENCIES[currencyOption].code}
                value={CURRENCIES[currencyOption].code}
              >
                {CURRENCIES[currencyOption].currency}
              </option>
            ))}
          </select>
        </label>
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
