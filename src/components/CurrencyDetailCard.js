import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CURRENCIES } from '../constants/constant';

function CurrencyDetailCard({ amount, code, currency, base, deleteTargetCurrency }) {
  const convertedAmount = amount * base;
  const { code: USDCode } = CURRENCIES.USD;

  return (
    <Wrapper>
      <div className="detail">
        <div className="row">
          <p>{code}</p>
          <p>{convertedAmount.toFixed(4)}</p>
        </div>
        <p className="bold italic">{`${code} - ${currency}`}</p>
        <p className="italic">{`1 ${USDCode} = ${code} ${amount.toFixed(4)}`}</p>
      </div>
      <button
        data-testid="deleteTargetCurrency"
        className="delete"
        onClick={deleteTargetCurrency}
      >
        X
      </button>
    </Wrapper>
  );
}

CurrencyDetailCard.propTypes = {
  amount: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  base: PropTypes.number.isRequired,
  deleteTargetCurrency: PropTypes.func.isRequired,
};

export default CurrencyDetailCard;

const Wrapper = styled.div`
  margin: 0.5rem 0;
  padding: 1rem;
  border: 1px solid #000000;

  .bold {
    font-weight: 700;
  }
  .italic {
    font-style: italic;
  }
  .detail {
    flex: 5;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 1rem;

    .row {
      justify-content: space-between;
    }
  }
  .delete {
    flex: 1;
  }
  button {
    background: #a30c0c;
    color: #ffffff;
    font-weight: 700;
  }
`;