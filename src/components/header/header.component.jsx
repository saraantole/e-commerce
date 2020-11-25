import { HeaderDiv, LogoContainer, OptionLink, OptionsDiv } from './header.styles';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderDiv>
            <LogoContainer to='/'>
                <Logo title='Logo' />
            </LogoContainer>
            <OptionsDiv>
                <OptionLink to='/shop'>Shop</OptionLink>
                <OptionLink to='/contact'>Contact</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>
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
})

export default connect(mapStateToProps)(Header);