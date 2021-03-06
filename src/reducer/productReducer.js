import { types } from "./../types/types";

const initialState = {
  products: [],
  error: null,
  loading: false,
  productEdit: null,
  productDelete: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
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
        productEdit: action.payload,
      };

    case types.productDelete:
      return {
        ...state,
        productDelete: action.payload,
      };

    case types.productDeleted:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== state.productDelete
        ),
        productDelete: null,
      };

    default:
      return state;
  }
};
