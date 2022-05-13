import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: data,
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    getCartTotal: (state, action) => {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    increase: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          //pass item id from UI
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    //to remove items from the cart
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decrease: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0); //remove from cart if === 0
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    getCartItems: (state) => {
      state.items = data;
    },
  },
});

export const {
  increase,
  getCartTotal,
  remove,
  decrease,
  clearCart,
  getCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
