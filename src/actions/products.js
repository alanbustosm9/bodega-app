import { types } from "./../types/types";

export const productAddNew = (products) => ({
  type: types.bodegaNewProduct,
  payload: products,
});

export const deleteProduct = (id) => ({
  type: types.bodegaDeleteProduct,
  payload: id,
});
