import React from 'react';

import { CardsListContainer, CardsListElem, Card } from './styles';

const CardsList = () => {
  return (
    <CardsListContainer>
      Cards List Container
      <CardsListElem>
        <Card>First Card</Card>
        <Card>Second Card</Card>
        <Card>Third Card</Card>
      </CardsListElem>
    </CardsListContainer>
  );
};

export default CardsList;
