import { fetchWithToken } from "../utils/fetch";
import { types } from "./../types/types";
import Swal from "sweetalert2";

export const productNew = (products) => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken("products", products, "POST");
      const body = await resp.json();

      if (body.ok) {
        // productActive._id = body.product._id;
        dispatch(productAddNew(products));
        Swal.fire("Success", "Producto guardado correctamente", "success");
      }
    } catch (error) {
      Swal.fire("Error", "No se pudo guardar el producto", "error");
    }
  };
};

const productAddNew = (products) => ({
  type: types.productNew,
  payload: products,
});

export const productsLoaded = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken("products");
      const body = await resp.json();

      const products = body.products;
      dispatch(productLoading(products));
    } catch (error) {
      Swal.fire("Error", "No se pudieron obtener los productos", "error");
    }
  };
};

const productLoading = (products) => ({
  type: types.productLoaded,
  payload: products,
});

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

export const productActive = (products) => ({
  type: types.productActive,
  payload: products,
});

export const productAskDelete = (id) => {
  return async (dispatch) => {
    dispatch(deleteProduct(id));

    try {
      const resp = await fetchWithToken(`products/${id}`, {}, "DELETE");
      const body = await resp.json();
      if (body.ok) {
        dispatch(productDeleted());
        Swal.fire("Eliminado", "El producto a sido eliminado", "success");
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Hable con el administrador", "error");
    }
  };
};

const deleteProduct = (id) => ({ type: types.productDelete, payload: id });

const productDeleted = () => ({ type: types.productDeleted });
