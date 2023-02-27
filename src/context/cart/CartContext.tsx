import { createContext } from "react";
import { CartState } from "./";

export interface CartContextProps {
  state: CartState;
  
  addQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeProduct: (id: number) => void;
};

export const CartContext = createContext({} as CartContextProps);
