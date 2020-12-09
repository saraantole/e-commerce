import React from 'react';
import { CartItemDiv, ItemDetailsDiv } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemDiv>
        <img src={imageUrl} alt='item' width='35%' />
        <ItemDetailsDiv>
            <span>{name}</span>
            <span>{quantity} x {`${price} €`}</span>
        </ItemDetailsDiv>
    </CartItemDiv>
)

export default React.memo(CartItem);