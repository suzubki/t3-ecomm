import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useContext, useRef } from "react";
import { motion } from "framer-motion";

import { UIContext } from "~/context/ui";
import { CartContext } from "~/context";

export const Navbar = () => {
  const searchContainer = useRef<HTMLDivElement>(null);
  const handleClickSearchContainer = () => {
    // focus input search
    searchContainer.current?.querySelector("input")?.focus();
  };

  const { toggleSidebar } = useContext(UIContext)
  const { state } = useContext(CartContext)
  

  return (
    <nav className="flex relative z-0 flex-wrap items-center justify-between bg-light-primary px-6 py-3 shadow-lg">
      <div className="mr-6 flex items-center gap-6">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center text-white">
          <span className="text-xl font-semibold tracking-tight">
            <Link href="/" className="text-2xl font-bold text-dark-primary">
              Panda
            </Link>
          </span>
        </div>
        {/* Items */}
        <div className="flex items-center gap-4">
          <motion.div className="border-b-solid cursor-pointer border-b-2 p-2 text-gray-600 hover:border-gray-900 hover:font-medium hover:text-gray-900">
            <span className="flex items-center text-sm tracking-[-.5px]">
              Categorías
              {/* Icon arrow down */}
              <MdKeyboardArrowDown className="text-xl" />
            </span>
          </motion.div>
          <div className="cursor-pointer p-2 text-gray-600 hover:font-medium hover:text-gray-900">
            <span className="flex items-center text-sm tracking-[-.5px]">
              Nuevos productos
            </span>
          </div>
          <div className="cursor-pointer p-2 text-gray-600 hover:font-medium hover:text-gray-900">
            <span className="flex items-center text-sm tracking-[-.5px]">
              Sobre nosotros
            </span>
          </div>
          <div className="cursor-pointer p-2 text-gray-600 hover:font-medium hover:text-gray-900">
            <span className="flex items-center text-sm tracking-[-.5px]">
              Ayuda
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        {/* Search Icon */}
        <div
          className="flex items-center gap-2 p-2"
          ref={searchContainer}
          onClick={() => handleClickSearchContainer()}
        >
          <AiOutlineSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Buscar"
            className="border-b-2 border-solid border-b-gray-300 bg-light-primary font-medium placeholder:text-xs focus:border-b-dark-primary focus:outline-none"
          />
        </div>
        {/* User Icon */}
        <div className="flex cursor-pointer items-center gap-1 p-2 text-gray-500 hover:font-medium hover:text-gray-600">
          <BiUserCircle className="text-xl" />
          <span className="text-xs tracking-[-.5px]">Iniciar sesión</span>
        </div>
        {/* Carrito */}
        <div className="relative mr-4 flex cursor-pointer items-center gap-1 p-2 text-gray-500 hover:font-medium hover:text-gray-600" onClick={() => toggleSidebar()}>
          <AiOutlineShoppingCart className="text-xl" />
          <span className="text-xs tracking-[-.5px]">Ver carrito</span>
          <div className="absolute top-0 -right-2 bg-dark-primary rounded-full flex justify-center items-center w-5 h-5 text-xs text-white">
            {state.length}
          </div>
        </div>
      </div>
    </nav>
  );
};
