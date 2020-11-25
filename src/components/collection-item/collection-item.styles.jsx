import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';


export const CollectionItemDiv = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ItemImageDiv = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterDiv = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;
`;

export const NameSpan = styled.span`
width: 85%;
margin-bottom: 15px;
`;

export const PriceSpan = styled.span`
width: 15%;
text-align: end;
`;

export const ItemCustomButton = styled(CustomButton)`
width: 80%;
opacity: 0.7;
position: absolute;
top: 255px;
display: none;
`;