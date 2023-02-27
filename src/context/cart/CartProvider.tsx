import { FC, ReactNode, useReducer } from "react";
import { CartProduct } from "~/interfaces";
import { CartContext, CartReducer } from "./";

interface Props {
  children: ReactNode;
}

const INITIAL_VALUES: CartProduct[] = [
  {
    id: 1000,
    name: "Producto 1",
    price: 20,
    quantity: 1,
    size: "M",
    color: "Rojo",
    src: "/images/product_2/131336001_722613651700269_2966154303848251242_n.jpg",
  }
];

export type CartState = CartProduct[];

export const CartProvider: FC<Props> = ({ children }) => {
  const [ state, dispatch ] = useReducer(CartReducer, INITIAL_VALUES)

  const addQuantity = (id: number) => dispatch({ type: '[CART] - ADD_QUANTITY', payload: { id } })
  const decreaseQuantity = (id: number) => dispatch({ type: '[CART] - DECREASE_QUANTITY', payload: { id } })
  const removeProduct = (id: number) => dispatch({ type: '[CART] - REMOVE_PRODUCT', payload: { id } })


  return <CartContext.Provider value={{ state, addQuantity, decreaseQuantity, removeProduct }}>
      {children}
    </CartContext.Provider>;
};
