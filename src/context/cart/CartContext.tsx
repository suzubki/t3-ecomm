import { createContext } from "react";

import type { CartState } from "./";
import type { CartProduct } from "~/interfaces";

export interface CartContextProps {
  state: CartState;
  
  addQuantity: (product: CartProduct, quantity: number) => void;
  decreaseQuantity: (product: CartProduct) => void;
  removeProduct: (product: CartProduct) => void;
  addProduct: (product: CartProduct) => void;
}

export const CartContext = createContext({} as CartContextProps);
