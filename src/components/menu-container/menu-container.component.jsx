import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMenuSections } from '../../redux/menu-container/menu-container.selectors';

import './menu-container.styles.scss';

const MenuContainer = ({ menuSections }) => {
    return (
        <div className='menu-container'>
            {
                menuSections.map(({ id, ...otherItemProps }) => (
                    <MenuItem key={id} {...otherItemProps} />
                )
                )
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    menuSections: selectMenuSections
})

export default connect(mapStateToProps)(MenuContainer);