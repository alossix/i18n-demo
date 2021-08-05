import styled from 'styled-components';

export const CardsListContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

export const CardsListElem = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid black;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 10rem;
  background-color: ${(p) => p.bg};
  padding: 1rem;
`;

export const CardsListTitle = styled.h2``;

export const CardTitle = styled.h3`
  color: white;
  mix-blend-mode: difference;
  margin: 0;
`;

export const CardText = styled.p`
  color: white;
  mix-blend-mode: difference;
  margin: 0;
`;
