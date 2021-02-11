import { CollectionPreviewDiv, TitleH1, PreviewDiv, PreviewButton } from './collection-preview.styles';

import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';


export const CollectionPreview = ({ title, items, history, match, routeName }) => {
    return (
        <CollectionPreviewDiv>
            <TitleH1>{title}</TitleH1>
            <PreviewDiv>
                {
                    items.filter((item, index) => index < 4)
                        .map(item => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </PreviewDiv>
            <PreviewButton onClick={() => { history.push(`${match.path}/${routeName}`) }}>See More</PreviewButton>
        </CollectionPreviewDiv>
    )
};

export default withRouter(CollectionPreview);