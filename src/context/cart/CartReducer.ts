import { CartProduct } from "~/interfaces";
import { CartState } from "./";

export type CartAction = { 
  type: "[CART] - ADD_PRODUCT"; 
  payload: { 
    product: CartProduct
  } 
} | { 
  type: "[CART] - ADD_QUANTITY";
  payload: {
    id: number
  }
} | { 
  type: "[CART] - DECREASE_QUANTITY";
  payload: {
    id: number
  }
} | { 
  type: "[CART] - REMOVE_PRODUCT";
  payload: {
    id: number
  }
};

export const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case '[CART] - ADD_PRODUCT':
      return [...state, action.payload.product]
    
    case '[CART] - ADD_QUANTITY':
      return [...state].map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item
      })
    
    case '[CART] - DECREASE_QUANTITY':
      return [...state].map(item => {
        if (item.id === action.payload.id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }
        return item
      })
    
    case '[CART] - REMOVE_PRODUCT':
      return [...state].filter(item => item.id !== action.payload.id)
  
    default:
      return [...state]
  }
}