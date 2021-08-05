import React, { useContext } from 'react';

import LangContext from '../../store/lang-context';

import {
  CardsListContainer,
  CardsListElem,
  CardsListTitle,
  Card,
  CardTitle,
  CardText,
} from './styles';

const CardsList = () => {
  const { language } = useContext(LangContext);
  let text = {};

  const textHandler = () => {
    if (language === 'en') {
      return (text = {
        containerTitle: `Cards list container`,
        firstCardTitle: `First Card`,
        firstCardText: `This card is number one! Background: American Red #b22234.`,
        secondCardTitle: `Second Card`,
        secondCardText: `This card is number two! Background: White #ffffff.`,
        thirdCardTitle: `Third Card`,
        thirdCardText: `This card is number three! Background: American Blue #3c3b6e.`,
      });
    }
    return (text = {
      containerTitle: `Lista delle carte`,
      firstCardTitle: `Prima Carta`,
      firstCardText: `Questa carta è numero uno! Sfondo: Philippine Green #008c45.`,
      secondCardTitle: `Seconda Carta`,
      secondCardText: `Questa carta è numero due! Sfondo: Anti-Flash White #f4f5f0.`,
      thirdCardTitle: `Terza Carta`,
      thirdCardText: `Questa carta è numero tre! Sfondo: Fire Engine Red #cd212a.`,
    });
  };
  textHandler();

  return (
    <CardsListContainer>
      <CardsListTitle>{text.containerTitle}</CardsListTitle>
      <CardsListElem>
        <Card bg={language === 'en' ? '#b22234' : '#008c45'}>
          <CardTitle>{text.firstCardTitle}</CardTitle>
          <CardText>{text.firstCardText}</CardText>
        </Card>
        <Card bg={language === 'en' ? '#fff' : '#f4f5f0'}>
          <CardTitle>{text.secondCardTitle}</CardTitle>
          <CardText>{text.secondCardText}</CardText>
        </Card>
        <Card bg={language === 'en' ? '#3c3b6e' : '#cd212a'}>
          <CardTitle>{text.thirdCardTitle}</CardTitle>
          <CardText>{text.thirdCardText}</CardText>
        </Card>
      </CardsListElem>
    </CardsListContainer>
  );
};

export default CardsList;
