import styled from 'styled-components';

export const CartDropdownDiv = styled.div`
  position: absolute;
  width: 280px;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsDiv = styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`;

export const EmptyMessageSpan = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

