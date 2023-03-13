import { FC, useContext } from "react";
import { CartContext } from "~/context";
import { CartProduct } from "~/interfaces";

interface Props{
  item: CartProduct
}

export const CartItem: FC<Props> = ({ item }) => {
  const { addQuantity, decreaseQuantity, removeProduct } = useContext(CartContext)

  return (
      <div className="py-4 px-6 flex gap-6">
        <div className="w-full flex-[2]">
          <img src={item.src} className="w-full h-auto object-cover" />
        </div>
        {/* Información del producto */}
        <div className="flex flex-col pt-2 flex-[3] gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-normal tracking-[-0.4px]">{item.name}</h1>
            <div className="flex flex-col">
              <div className="flex text-xs items-end gap-1">
                <span className="font-semibold text-xs">Tamaño:</span>
                <span className="text-gray-600">{item.size}</span>
              </div>
            </div>
          </div>
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
              <span className="text-xs">S/</span>
              <span className="text-lg">{item.price.toFixed(2)}</span>
            </div>
          </div>
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