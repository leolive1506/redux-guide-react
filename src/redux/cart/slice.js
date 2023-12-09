// criar cart reduce e actions
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: []
}

const cartSlice = createSlice({
  // nome do reducer
  name: 'cart',
  initialState,
  // actions
  reducers: {
    addProduct: (state, action) => {
      const productIsAlreadyInCart = state.products.some(product => product.id === action.payload.id)
      if (productIsAlreadyInCart) {
        state.products = state.products.map(product =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
        return;
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }]
    }
  }
})

export const { addProduct } = cartSlice.actions