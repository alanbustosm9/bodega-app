import { types } from "./../types/types";

const initialState = {
  products: [],
  error: null,
  loading: false,
  active: null,
};

export const bodegaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productActive:
      return {
        ...state,
        active: action.payload,
      };

    case types.productNew:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case types.productLoaded:
      return {
        ...state,
        products: [...action.payload],
      };

    case types.productUpdate:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload.product : product
        ),
      };

    case types.productDelete:
      return {
        ...state,
        products: state.negocio.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
