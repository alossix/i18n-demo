import React, { useContext } from 'react';

import LangContext from '../../store/lang-context';
import { CardsListContainer, CardsListElem, Card } from './styles';

const text = (lang) => {
  if (lang === 'en') {
    return {
      containerTitle: `Cards list container`,
      firstCard: `First Card`,
      secondCard: `Second Card`,
      thirdCard: `Third Card`,
    };
  }
  return {
    containerTitle: `Lista delle carte`,
    firstCard: `Prima Carta`,
    secondCard: `Seconda Carta`,
    thirdCard: `Terza Carta`,
  };
};

const CardsList = () => {
  const { language } = useContext(LangContext);

  return (
    <CardsListContainer>
      {text(language).containerTitle}
      <CardsListElem>
        <Card>{text(language).firstCard}</Card>
        <Card>{text(language).secondCard}</Card>
        <Card>{text(language).thirdCard}</Card>
      </CardsListElem>
    </CardsListContainer>
  );
};

export default CardsList;
