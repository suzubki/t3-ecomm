import { useContext, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { CartContext, UIContext } from "~/context";
import { GridCartItem } from "~/components";
import { CartPersonIcon } from "../icons";

export const Sidebar = () => {
  const { toggleSidebar } = useContext(UIContext)
  const { state } = useContext(CartContext)
  const total = state.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  return (
    <div className="absolute overflow-auto flex flex-col right-0 top-0 z-10 h-screen shadow-md bg-white">
      {/* Carrito e Icon X */}
      <div className="px-6 my-2 py-6 flex justify-between shadow-sm">
        <div className="text-sm font-light tracking-[0.5px]">Carrito</div>
        <div className="flex justify-end">
          <AiOutlineClose className="h-6 w-6 cursor-pointer" onClick={() => toggleSidebar()} />
        </div>
      </div>
      {
        state.length > 0 ? (
          <div className="relative">
            {/* Grid cart item */}
            <GridCartItem items={state} />
            {/* Precio total a pagar */}
            <div className="fixed flex flex-col gap-4 w-full bottom-0">
              {/* Subtotal */}
              <div className="flex items-center gap-4 justify-between px-6">
                <span className="text-2xl font-light tracking-[0.5px]">Subtotal</span>
                <div className="flex items-center gap-1">
                  <span className="text-md">S/</span>
                  <span className="text-2xl">{total.toFixed(2)}</span>
                </div>
              </div>
              {/* Pagar y descripción */}
              <div className="w-full flex flex-col gap-1">
                <div className="max-w-xs text-center leading-[1px] mx-auto">
                  <span className="text-xs text-center text-gray-500">Envío, impuestos y códigos de descuento calculados al finalizar la compra.</span>
                </div>
                <button className="w-full bg-gray-700 text-white py-4 font-semibold tracking-[0.5px] duration-300 hover:bg-gray-800 transition-all ease-out">Pagar</button>
              </div>
            </div> 
          </div>
        ) : (
          <div className="mx-6">
            <span className="text-xs">Tu carrito de compras está vacío.</span>
            <div className="flex items-center justify-center">
              <CartPersonIcon />
            </div>
          </div>
        )
      }

    </div>
  );
};
