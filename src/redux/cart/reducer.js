import products from "../../data/products"
import { CartActionTypes } from "./action-types"

const initialState = {
  products: [],
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CartActionTypes.ADD:
      const productIsAlreadyInCart = state.products.some(product => product.id === action.payload.id)
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map(product => 
            product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
          )
        }
      }
      return {
        ...state,
        products: [
          ...state.products,
          { ...action.payload, quantity: 1}
        ]
      }
    case CartActionTypes.REMOVE: 
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.id)
      }
    case CartActionTypes.INCREASE:
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
        )
      }
    case CartActionTypes.DECREASE:
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.payload.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
        ).filter(product => product.quantity > 0)
      }
    default:
      return initialState
  }
}