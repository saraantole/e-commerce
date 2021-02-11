import { HeaderDiv, LogoContainer, OptionLink, OptionsDiv } from './header.styles';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

export const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <HeaderDiv>
            <LogoContainer to='/'>
                <Logo title='Logo' />
            </LogoContainer>
            <OptionsDiv>
                <OptionLink to='/shop'>Shop</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={signOutStart}>Sign Out</OptionLink>
                        :
                        <OptionLink to='/signin'>Sign In</OptionLink>
                }
                <CartIcon />
            </OptionsDiv>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderDiv>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);