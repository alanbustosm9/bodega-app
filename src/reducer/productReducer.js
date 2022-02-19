import { types } from "./../types/types";

const initialState = {
  products: [],
  error: null,
  loading: false,
  active: null,
  productEdit: null,
  productDelete: null,
};

export const productReducer = (state = initialState, action) => {
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
        productEdit: action.payload,
      };

    // case types.productUpdateFinish:
    //   return {
    //     ...state,
    //     productEdit: null,
    //     products: state.products.map((product) =>
    //       product._id ? (product = action.payload) : product
    //     ),
    //   };

    case types.productDelete:
      return {
        ...state,
        productDelete: action.payload,
      };

    case types.productDeleted:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.productDelete
        ),
        productDelete: null,
      };

    default:
      return state;
  }
};
