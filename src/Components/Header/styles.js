import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 1rem;

  &.dark {
    background-color: coral;
  }
`;

export const HeaderTitle = styled.h1``;

export const LanguageSelectLabel = styled.label`
  padding-right: 2rem;
`;

export const LanguageSelect = styled.select`
  height: 2rem;
  margin: 1rem 0;
  width: 10rem;
`;

export const ModeLabel = styled.label`
  padding-right: 2rem;
`;
export const ModeSelect = styled.select`
  height: 2rem;
  margin: 1rem 0;
  width: 10rem;
`;
