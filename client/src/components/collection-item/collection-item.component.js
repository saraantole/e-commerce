import { CollectionItemDiv, ItemImageDiv, CollectionFooterDiv, NameSpan, PriceSpan, ItemCustomButton } from './collection-item.styles';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

export const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item;
    return (
        <CollectionItemDiv>
            <ItemImageDiv className='image' imageUrl={imageUrl} />
            <CollectionFooterDiv>
                <NameSpan>{name}</NameSpan>
                <PriceSpan>{price} €</PriceSpan>
            </CollectionFooterDiv>
            <ItemCustomButton inverted onClick={() => addItem(item)}>Add to Cart</ItemCustomButton>
        </CollectionItemDiv>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);