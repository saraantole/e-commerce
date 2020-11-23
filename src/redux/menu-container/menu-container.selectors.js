import { createSelector } from 'reselect';

const selectMenuContainer = state => state.menuContainer;

export const selectMenuSections = createSelector(
    [selectMenuContainer],
    menuContainer => menuContainer.sections
);

