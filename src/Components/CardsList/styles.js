import styled from 'styled-components';

export const CardsListContainer = styled.main`
  background-color: lightblue;
`;

export const CardsListElem = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 20rem;
  background-color: lightgray;
`;
