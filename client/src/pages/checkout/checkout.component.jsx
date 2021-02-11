import { CheckoutPageDiv, CheckoutHeaderDiv, HeaderBlockDiv, TotalDiv, TestWarningDiv} from './checkout.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


export const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageDiv>
        <CheckoutHeaderDiv>
            <HeaderBlockDiv>
                <span>Product</span>
            </HeaderBlockDiv>
            <HeaderBlockDiv>
                <span>Description</span>
            </HeaderBlockDiv>
            <HeaderBlockDiv>
                <span>Quantity</span>
            </HeaderBlockDiv>
            <HeaderBlockDiv>
                <span>Price</span>
            </HeaderBlockDiv>
            <HeaderBlockDiv>
                <span>Remove</span>
            </HeaderBlockDiv>
        </CheckoutHeaderDiv>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            )
        }
        <TotalDiv>
            <span>Total: {total} €</span>
        </TotalDiv>
        <TestWarningDiv>
            *Please use the following test credit card number for payments*
        <br />4242 4242 4242 4242
        </TestWarningDiv>
        <StripeCheckoutButton price={total} />
    </CheckoutPageDiv>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);