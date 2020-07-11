import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
