import styled from 'styled-components';

export const CardsListContainer = styled.main`
  padding: 1rem;
`;

export const CardsListElem = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100%;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 10rem;
  background-color: ${(p) => p.bg};
`;

export const CardTitle = styled.h2``;

export const CardText = styled.p``;
