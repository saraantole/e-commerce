import styled from 'styled-components';

export const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 80vw;
  }
`;

export const TitleH2 = styled.h2`
    margin: 10px 0;
`;