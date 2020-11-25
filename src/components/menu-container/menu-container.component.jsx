import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMenuSections } from '../../redux/menu-container/menu-container.selectors';

import { MenuContainerDiv } from './menu-container.styles';

const MenuContainer = ({ menuSections }) => {
    return (
        <MenuContainerDiv>
            {
                menuSections.map(({ id, ...otherItemProps }) => (
                    <MenuItem key={id} {...otherItemProps} />
                )
                )
            }
        </MenuContainerDiv>
    )
}

const mapStateToProps = createStructuredSelector({
    menuSections: selectMenuSections
})

export default connect(mapStateToProps)(MenuContainer);