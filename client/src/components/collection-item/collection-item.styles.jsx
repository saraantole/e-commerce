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

  @media screen and (max-width: 800px){
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
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

ItemImageDiv.displayName = 'ItemImageDiv';

export const CollectionFooterDiv = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;

@media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

CollectionFooterDiv.displayName = 'CollectionFooterDiv';

export const NameSpan = styled.span`
width: 85%;
margin-bottom: 15px;

@media screen and (max-width: 800px) {
    width: 70%;
  }
`;

NameSpan.displayName = 'NameSpan';

export const PriceSpan = styled.span`
width: 15%;
text-align: end;

@media screen and (max-width: 800px) {
    width: 30%;
  }
`;

PriceSpan.displayName = 'PriceSpan';

export const ItemCustomButton = styled(CustomButton)`
width: 80%;
opacity: 0.7;
position: absolute;
top: 255px;
display: none;

@media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

ItemCustomButton.displayName= 'ItemCustomButton';