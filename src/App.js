import React from 'react';

import Header from './Components/Header/Header';
import CardsList from './Components/CardsList/CardsList';
import Footer from './Components/Footer/Footer';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <Header />
      <CardsList />
      <Footer />
    </Container>
  );
}

export default App;
