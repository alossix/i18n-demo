import styled from 'styled-components';

export const CardsListContainer = styled.main`
  background-color: lightblue;
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
  background-color: lightgray;
`;
