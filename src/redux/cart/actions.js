import { CartActionTypes } from "./action-types";

export const addCart = (payload) => ({
  type: CartActionTypes.ADD,
  payload
})

export const removeCart = (payload) => ({
  type: CartActionTypes.REMOVE,
  payload
})

export const increaseCart = (payload) => ({
  type: CartActionTypes.INCREASE,
  payload
})

export const decreaseCart = (payload) => ({
  type: CartActionTypes.DECREASE,
  payload
})