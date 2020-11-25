import styled from 'styled-components';

export const CollectionPageDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleH2 = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const ItemsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    & > div {
      margin-bottom: 30px;
    }
`;


