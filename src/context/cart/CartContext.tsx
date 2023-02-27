import { createContext } from "react";
import { CartProduct } from "~/interfaces";
import { CartState } from "./";

export interface CartContextProps {
  state: CartState;
  
  addQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeProduct: (id: number) => void;
  addProduct: (productToCart: CartProduct) => void;
};

export const CartContext = createContext({} as CartContextProps);
