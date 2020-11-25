import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CollectionPreviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleH1 = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    text-transform: uppercase;
`;

export const PreviewDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PreviewButton = styled(CustomButton)`
   width: 20px;
   margin-left: auto;
   margin-top: 20px;
`;