import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "~/context";
import type { CartProduct } from "~/interfaces";

interface Props{
  item: CartProduct
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const { addQuantity, decreaseQuantity, removeProduct } = useContext(CartContext)

  return (
      <div className="py-4 px-6 flex gap-6">
        <div className="flex-1 sm:w-full sm:flex-[2]">
          <Image alt={`${item.name}`} width={400} height={400} src={item.src} className="w-full  h-auto object-cover" />
        </div>
        {/* Información del producto */}
        <div className="flex flex-col gap-1 sm:pt-2 flex-[5] sm:flex-[3] sm:gap-8">
          {/* Name and size */}
          <div className="flex flex-col gap-1 sm:gap-4">
            <h1 className="sm:text-lg tracking-[-0.4px]">{item.name}</h1>
            <div className="flex flex-col">
              <div className="flex text-xs items-end gap-1">
                <span className="font-normal text-xs sm:font-semibold">Size:</span>
                <span className="text-gray-600">{item.size}</span>
              </div>
            </div>
          </div>
          {/* Buttons and product price */}
          <div className="flex justify-between">
            {/* Botones para agregar/disminuir cantidad */}
            <div className="flex items-center gap-3">
              <button 
                className="w-6 h-6 shadow-sm bg-gray-100 flex items-center justify-center hover:bg-gray-700 duration-100 hover:text-white transition-all ease-in"
                onClick={() => decreaseQuantity(item)}
              >
                <span className="text-xs font-bold">-</span>
              </button>
              <span className="text-xs font-bold">{item.quantity}</span>
              <button 
                className="w-6 h-6 shadow-sm bg-gray-100 flex items-center justify-center hover:bg-gray-700 duration-100 hover:text-white transition-all ease-in"
                onClick={() => addQuantity(item, 1)}
              >
                <span className="text-xs font-bold">+</span>
              </button>
            </div>
            {/* Precio a pagar */}
            <div className="flex items-center gap-1">
              <span className="text-xs">$ </span>
              <span className="text-base sm:text-lg">{item.price.toFixed(2)}</span>
            </div>
          </div>
          {/* Delete product */}
          <div className="text-end">
            <button 
              className="text-xs text-gray-500 hover:text-gray-700 duration-100 transition-all ease-in"
              onClick={() => removeProduct(item)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
  )
}