import React from 'react';

import Header from './Components/Header/Header';
import CardsList from './Components/CardsList/CardsList';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <Header />
      <CardsList />
    </Container>
  );
}

export default App;
