import { FC, ReactNode } from "react";
import { CartContext } from "./CartContext";

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
