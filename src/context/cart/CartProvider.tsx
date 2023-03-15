import { useReducer } from "react";
import { CartContext, CartReducer } from "./";
import type { CartProduct } from "~/interfaces";

interface Props {
  children: React.ReactNode;
}

const INITIAL_VALUES: CartProduct[] = [
  {
    id: 1000,
    name: "Producto 1",
    price: 20,
    quantity: 1,
    size: "M",
    src: "/images/product_2/131336001_722613651700269_2966154303848251242_n.jpg",
  }
];

export type CartState = CartProduct[];

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [ state, dispatch ] = useReducer(CartReducer, INITIAL_VALUES)

  const addQuantity = (product: CartProduct, quantity: number) => {
    dispatch({ type: '[CART] - ADD_QUANTITY', payload: { id: product.id, size: product.size, quantity }})
  }
  const decreaseQuantity = (product: CartProduct) => {
    dispatch({ type: '[CART] - DECREASE_QUANTITY', payload: { id: product.id, size: product.size } })
  }
  const removeProduct = (product: CartProduct) => {
    dispatch({ type: '[CART] - REMOVE_PRODUCT', payload: { id: product.id, size: product.size } })
  }
  const addProduct = (product: CartProduct) => {
    const productExists = state.find((item) => item.id === product.id)
    if (productExists && product.size === productExists.size) {
      return addQuantity(product, product.quantity)
    }
    dispatch({ type: '[CART] - ADD_PRODUCT', payload: { product }})
  }

  return <CartContext.Provider value={{ state, addQuantity, decreaseQuantity, removeProduct, addProduct }}>
      {children}
    </CartContext.Provider>;
};
