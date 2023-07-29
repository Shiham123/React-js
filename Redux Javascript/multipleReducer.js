const { createStore, combineReducers, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

const get_product = 'get_product';
const add_product = 'add_product';

const initialProductState = {
  products: ['sugar', 'salt'],
  numberOfProduct: 2,
};

const getProducts = () => {
  return {
    type: get_product,
  };
};

const addProduct = (product) => {
  return {
    type: add_product,
    payload: product,
  };
};

const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case get_product:
      return {
        ...state,
      };
    case add_product:
      return {
        products: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };
    default:
      return state;
  }
};

const storeProduct = createStore(productsReducer, applyMiddleware(logger));

storeProduct.subscribe(() => {
  console.log(storeProduct.getState());
});

storeProduct.dispatch(addProduct('pen'));
