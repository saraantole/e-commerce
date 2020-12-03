import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;


export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
);

export const selectCollection = memoize(collectionParam =>
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionParam] : null)
    )
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);