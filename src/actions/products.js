import { fetchWithToken } from "../utils/fetch";
import { types } from "./../types/types";
import Swal from "sweetalert2";

export const productNew = (products) => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken("products", products, "POST");
      const body = await resp.json();

      if (body.ok) {
        dispatch({ type: types.productNew, payload: products });
        dispatch(productsLoaded());
        Swal.fire("Success", "Producto guardado correctamente", "success");
      }
    } catch (error) {
      Swal.fire("Error", "No se pudo guardar el producto", "error");
    }
  };
};

export const productsLoaded = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken("products");
      const body = await resp.json();

      const products = body.products;
      dispatch({ type: types.productLoaded, payload: products });
    } catch (error) {
      Swal.fire("Error", "No se pudieron obtener los productos", "error");
    }
  };
};

export const productToEdit = (products) => {
  return (dispatch) => {
    dispatch(productEdit(products));
  };
};

const productEdit = (products) => ({
  type: types.productUpdate,
  payload: products,
});

export const productEdited = (products) => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken(
        `products/${products._id}`,
        products,
        "PUT"
      );
      const body = await resp.json();
      if (body.ok) {
        dispatch(productDataToEdit(products));
      }
    } catch (error) {
      Swal.fire("Error", "No se pudo editar el producto", "error");
    }
  };
};

const productDataToEdit = (products) => ({
  type: types.productDataToEdit,
  payload: products,
});

export const productAskDelete = (id) => {
  return async (dispatch) => {
    dispatch({ type: types.productDelete, payload: id });

    try {
      const resp = await fetchWithToken(`products/${id}`, {}, "DELETE");
      const body = await resp.json();
      if (body.ok) {
        dispatch({ type: types.productDeleted });
        Swal.fire("Eliminado", "El producto a sido eliminado", "success");
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Hable con el administrador", "error");
    }
  };
};
