import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Header({ title, currency, base }) {
  return (
    <Wrapper>
      <h5>{title}</h5>
      <div className="row">
        <h4>{currency}</h4>
        <h4>{base}</h4>
      </div>
    </Wrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  flex-direction: column;
  border-bottom: 1px solid #000000;

  .row {
    justify-content: space-between;
  }
`;