import CollectionItem from '../../components/collection-item/collection-item.component';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import { CollectionPageDiv, TitleH2, ItemsDiv } from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageDiv>
            <TitleH2>{title}</TitleH2>
            <ItemsDiv>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </ItemsDiv>
        </CollectionPageDiv>
    )
};


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);