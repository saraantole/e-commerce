import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const CollectionPreviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleH1 = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    text-transform: uppercase;
`;

TitleH1.displayName= 'TitleH1';

export const PreviewDiv = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
`;

export const PreviewButton = styled(CustomButton)`
   width: 20px;
   margin-left: auto;
   margin-top: 20px;

   @media screen and (max-width: 800px) {
    margin-right: 5vw;
  }
`;