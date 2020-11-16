import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' title='Logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>Shop</Link>
                <Link to='/contact' className='option'>Contact</Link>
                <Link to='/signin' className='option'>Sign In</Link>
            </div>
        </div>
    )
}

export default Header;