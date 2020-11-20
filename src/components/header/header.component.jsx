import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { auth } from '../../firebase/firebase.utils';

import { Link } from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' title='Logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>Shop</Link>
                <Link to='/contact' className='option'>Contact</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                        :
                        <Link to='/signin' className='option'>Sign In</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);