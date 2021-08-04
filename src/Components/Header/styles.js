import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: lightcoral;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  &.dark {
    background-color: coral;
  }
`;

export const HeaderTitle = styled.h1``;

export const LanguageSelectLabel = styled.label`
  padding-right: 2rem;
`;

export const LanguageSelect = styled.select``;

export const ModeLabel = styled.label`
  padding-right: 2rem;
`;
export const ModeSelect = styled.select``;
