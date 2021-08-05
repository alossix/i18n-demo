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
  height: 10rem;
  background-color: ${(p) => p.bg};
`;

export const CardTitle = styled.h2``;

export const CardText = styled.p``;
