import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { UIContext } from "~/context/ui";

export const Sidebar = () => {
  const { toggleSidebar } = useContext(UIContext)
  
  
  return <div className="absolute flex flex-col right-0 top-0 z-10 h-screen w-[25rem] shadow-md bg-white">
    <div className="flex justify-end">
      <AiOutlineClose className="m-4 p-2 h-8 w-8 cursor-pointer" onClick={() => toggleSidebar()} />
    </div>
    <div className="px-6 flex gap-6">
        {/* Imagen del producto */}
        {/* TODO: Mejorar el rendimiento de la imagen */}
        <div className="w-full flex-[2]">
          <img src={'/images/product_2/131336001_722613651700269_2966154303848251242_n.jpg'} className="w-full h-auto object-cover" />
        </div>
        {/* Información del producto */}
        <div className="flex flex-col pt-2 flex-[3] gap-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold">Nombre del producto</h1>
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-xs">Tamaño:</span>
              <span className="font-bold text-sm text-gray-600">M</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-xs">Color:</span>
              <span className="font-bold text-sm text-gray-600">1</span>
            </div>
          </div>
          <div className="flex justify-between">
            {/* Botones para agregar/disminuir cantidad */}
            <div className="flex items-center gap-3">
              <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">-</span>
              </button>
              <span className="text-xs font-bold">1</span>
              <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">+</span>
              </button>
            </div>
            {/* Precio a pagar */}
            <div>
              <span className="text-xs font-bold">S/</span>
              <span className="text-lg font-bold">20.00</span>
            </div>
          </div>
        </div>
    </div>
  </div>;
};
