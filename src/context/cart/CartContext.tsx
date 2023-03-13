import { createContext } from "react";
import { CartProduct } from "~/interfaces";
import { CartState } from "./";

export interface CartContextProps {
  state: CartState;
  
  addQuantity: (product: CartProduct, quantity: number) => void;
  decreaseQuantity: (product: CartProduct) => void;
  removeProduct: (product: CartProduct) => void;
  addProduct: (product: CartProduct) => void;
};

export const CartContext = createContext({} as CartContextProps);
