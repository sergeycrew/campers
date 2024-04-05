export const selectCatalog = (state) => state.catalog.catalog;
export const selectTotal = (state) => state.catalog.total;
export const selectPage = (state) => state.catalog.currentPage;
export const selectIsLoading = (state) => state.catalog.isLoading;
export const selectFavorite = (state) => state.catalog.favorites;
export const selectItemsPerPage = (state) => state.catalog.itemsPerPage;
export const selectFilter = ({ filter }) => filter;
