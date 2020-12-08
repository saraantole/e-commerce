import { CheckoutItemDiv, ImageDiv, TextSpan, QuantitySpan, RemoveButtonDiv } from './checkout-item.styles';

import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <CheckoutItemDiv>
            <ImageDiv>
                <img src={imageUrl} alt='item' />
            </ImageDiv>
            <TextSpan>{name}</TextSpan>
            <QuantitySpan>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantitySpan>
            <TextSpan>{price} €</TextSpan>
            <RemoveButtonDiv onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButtonDiv>
        </CheckoutItemDiv>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);