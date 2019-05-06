import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CURRENCY_LIST, CURRENCIES } from '../constants/constant';

function AddCurrency({ onSubmit }) {
  const [currencyInput, setCurrencyInput] = useState('');

  const onClickSubmit = () => {
    onSubmit(currencyInput);
    setCurrencyInput('');
  };

  return (
    <Wrapper>
      {currencyInput.length !== 0 && (
        <div className="selected-currency">
          <div className="currency-input">{currencyInput}</div> 
          <button onClick={onClickSubmit}>Submit</button>
        </div>
      )}
      {currencyInput.length === 0 && (
        <select value={currencyInput} onChange={(event) => setCurrencyInput(event.target.value)}>
          <option value="" disabled>(+) Add More Currencies</option>
          {CURRENCY_LIST.map(currencyOption => {
            const { code, currency } = CURRENCIES[currencyOption];

            return (
              <option key={code} value={code}>
                {code} - {currency}
              </option>
            );
          })}
        </select>
      )}
    </Wrapper>
  );
}

AddCurrency.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddCurrency;

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;

  .selected-currency {
    flex: 1;

    > * {
      padding: 0.5rem;
    }
    .currency-input {
      flex: 5;
      border: 1px solid black;
    }
    button {
      flex: 1;
      border: 1px solid black;
    }
  }
  select {
    border: 1px solid black;
  }
`;