import { fetchWithToken } from "../utils/fetch";
import { types } from "./../types/types";
import Swal from "sweetalert2";

export const productNew = (products) => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken("products", products, "POST");
      const body = await resp.json();

      if (body.ok) {
        productActive._id = body.product._id;
        dispatch(productAddNew(products));
        Swal.fire("Success", "Producto guardado correctamente", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const productAddNew = (products) => ({
  type: types.productNew,
  payload: products,
});

export const productActive = (products) => ({
  type: types.productActive,
  payload: products,
});

export const deleteProduct = (id) => ({
  type: types.productDelete,
  payload: id,
});
