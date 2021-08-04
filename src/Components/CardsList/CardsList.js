import React, { useContext } from 'react';

import LangContext from '../../store/lang-context';
import ModeContext from '../../store/mode-context';

import { CardsListContainer, CardsListElem, Card } from './styles';

const CardsList = () => {
  const { language } = useContext(LangContext);
  const { darkMode } = useContext(ModeContext);
  let text = {};

  const textHandler = () => {
    if (language === 'en') {
      return (text = {
        containerTitle: `Cards list container`,
        firstCard: `First Card`,
        secondCard: `Second Card`,
        thirdCard: `Third Card`,
      });
    }
    return (text = {
      containerTitle: `Lista delle carte`,
      firstCard: `Prima Carta`,
      secondCard: `Seconda Carta`,
      thirdCard: `Terza Carta`,
    });
  };
  textHandler();

  return (
    <CardsListContainer>
      {text.containerTitle}
      <CardsListElem>
        <Card>{text.firstCard}</Card>
        <Card>{text.secondCard}</Card>
        <Card>{text.thirdCard}</Card>
      </CardsListElem>
    </CardsListContainer>
  );
};

export default CardsList;
