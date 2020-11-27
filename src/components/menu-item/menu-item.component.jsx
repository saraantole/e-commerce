import { withRouter } from 'react-router-dom';

import { MenuItemDiv, BgImgDiv, ContentDiv, TitleH1, SubtitleSpan } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <MenuItemDiv className={size} onClick={() => { history.push(`${match.url}${linkUrl}`) }}>
            <BgImgDiv className='bg-img' imageUrl={imageUrl} />
            <ContentDiv className='content'>
                <TitleH1>{title}</TitleH1>
                <SubtitleSpan>Shop now</SubtitleSpan>
            </ContentDiv>
        </MenuItemDiv>
    )
}

export default withRouter(MenuItem);