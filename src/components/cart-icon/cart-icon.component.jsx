import { CartIconDiv, ShoppingIconStyled, ItemCountSpan } from './cart-icon.styles';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconDiv onClick={toggleCartHidden}>
        <ShoppingIconStyled />
        <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconDiv>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

