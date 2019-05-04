import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

function App() {
  return (
    <Wrapper>
      <Header
        title="USD - United States Dollars"
        currency="USD"
        base="10.00"
      />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  div {
    display: flex;
  }
`;
