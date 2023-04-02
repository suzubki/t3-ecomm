import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { CartContext, UIContext } from "~/context";
import { GridCartItem } from "~/components";
import CartPersonIcon from "../../../public/icons/shopping-cart.svg";

export const Sidebar = () => {
  const { toggleSidebar } = useContext(UIContext)
  const { state } = useContext(CartContext)
  const total = state.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  return (
    <div className="flex flex-col w-full h-full absolute overflow-auto right-0 top-0 z-20 sm:h-screen shadow-md bg-white">
      {/* Carrito e Icon X */}
      <div className="px-6 py-5 sticky top-0 bg-white w-full z-50 sm:py-6 flex justify-between shadow-sm">
        <div className="text-sm font-light tracking-[0.5px]">Cart</div>
        <div className="flex justify-end">
          <AiOutlineClose className="h-6 w-6 cursor-pointer" onClick={() => toggleSidebar()} />
        </div>
      </div>
      {
        state.length > 0 ? (
          <div className="h-full relative flex flex-col overflow-hidden">
            {/* Grid cart item */}
            <GridCartItem items={state} />
            {/* Amount to pay */}
            <div className="pt-2 sticky bottom-0 flex flex-col gap-4 w-full bottom-0 bg-white">
              {/* Subtotal */}
              <div className="flex items-center gap-4 justify-between px-6">
                <span className="text-2xl font-light tracking-[0.5px]">Subtotal</span>
                <div className="flex items-center gap-1">
                  <span className="text-md">$ </span>
                  <span className="text-2xl">{total.toFixed(2)}</span>
                </div>
              </div>
              {/* Payment and description for it */}
              <div className="w-full flex flex-col gap-1">
                <div className="max-w-xs text-center leading-[1px] mx-auto">
                  <span className="text-xs text-center text-gray-500">
                    Shipping, taxes, and discounts codes calculated at checkout.
                  </span>
                </div>
                <button className="w-full bg-gray-700 text-white py-4 font-semibold tracking-[0.5px] duration-300 hover:bg-gray-800 transition-all ease-out">Pagar</button>
              </div>
            </div> 
          </div>
        ) : (
          <div className="mx-6">
            <span className="text-xs">Your shopping cart is empty.</span>
            <div className="flex items-center justify-center">
              <CartPersonIcon width={400} height={400} />
            </div>
          </div>
        )
      }

    </div>
  );
};
