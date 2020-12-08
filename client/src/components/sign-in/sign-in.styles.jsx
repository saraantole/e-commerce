import styled from 'styled-components';

export const SignInDiv = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 80vw;
  }
`;

export const TitleH2 = styled.h2`
    margin: 10px 0;
`;

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
`;


