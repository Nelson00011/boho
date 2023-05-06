//TODO:Wishlist
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWishListOpen: false,
  cartWish: [],
  itemsWish: [],
};


export const cartWishSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
      setItemsWish: (state, action) => {
        state.itemsWish = action.payload;
      },
  
      addToCartWish: (state, action) => {
        state.cartWish = [...state.cartWish, action.payload.item];
      },
  
      removeFromCartWish: (state, action) => {
        state.cartWish = state.cartWish.filter((item) => item.id !== action.payload.id);
      },
  
      setIsWishListOpen: (state) => {
        state.isWishListOpen = !state.isWishListOpen;
      },
    },
  });

  export const {
    setItemsWish,
    addToCartWish,
    removeFromCartWish,
    setIsWishListOpen,
  } = cartWishSlice.actions;
  
  export default cartWishSlice.reducer;