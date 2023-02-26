import { createSlice } from "@reduxjs/toolkit";

// initial value
const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add a product to the cart
    addProductTocart: (state, action) => {
      const foundItem = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (foundItem) {
        foundItem.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

    // remove a product from the cart
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },

    // reset the entire cart
    resetCart: (state, action) => {
      state.products = [];
    },
  },
});

// action creators
export const { addProductTocart, removeProductFromCart, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
