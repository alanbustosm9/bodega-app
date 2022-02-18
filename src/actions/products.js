import { types } from "./../types/types";

export const productAddNew = (products) => ({
  type: types.bodegaNewProduct,
  payload: products,
});

export const deleteProduct = (id) => {
  return async (dispatch) => {
    //TODO: FALTA ESTO
  };
};
