import { types } from "./../types/types";

const initialState = {
  products: [],
  error: null,
  loading: false,
};

export const bodegaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.bodegaNewProduct:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case types.bodegaDeleteProduct:
      return {
        ...state,
        products: state.products.filter((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    default:
      return state;
  }
};
