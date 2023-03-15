import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useContext, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { UIContext } from "~/context/ui";
import { CartContext } from "~/context";
import { useClickOutside } from "~/hooks";
import { slugifyText } from "~/utils";

export const Navbar = () => {
  const searchContainer = useRef<HTMLDivElement>(null);
  const handleClickSearchContainer = () => {
    // focus input search
    searchContainer.current?.querySelector("input")?.focus();
  };

  const { toggleSidebar } = useContext(UIContext)
  const { state } = useContext(CartContext)

  // Categories is collapsed
  const [isCollapsed, setIsCollapsed] = useState(false);  
  const categoriesRef = useRef<HTMLDivElement>(null)
  useClickOutside(searchContainer, () => setIsCollapsed(false))

  return (
    <nav className="flex relative flex-wrap items-center justify-between bg-light-primary px-6 py-3 shadow-lg">
      <div className="mr-6 flex items-center gap-6">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center text-white">
          <button className="text-xl font-semibold tracking-tight">
            <Link href="/test" className="text-2xl font-bold text-dark-primary">
              Panda
            </Link>
          </button>
        </div>
        {/* Items */}
        <div className="flex items-center gap-4">
          <div 
            className="relative z-50 border-b-solid cursor-pointer border-b-2 text-gray-600 hover:border-b-solid hover:border-b-gray-900" 
          >
            <button 
              className="p-2 flex items-center text-sm tracking-[-.5px] hover:font-medium hover:text-gray-900"
              onMouseEnter={() => setIsCollapsed(true)}
            >
              Categorías
              {/* Icon arrow down */}
              <MdKeyboardArrowDown className="text-xl" />
            </button>
            <AnimatePresence>
              {
                isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 -left-2 w-56 top-9 bg-light-primary shadow-lg rounded-md p-4"
                    onMouseEnter={() => setIsCollapsed(true)}
                    onMouseLeave={() => setIsCollapsed(false)}
                  >
                    <div className="flex flex-col gap-4">
                      {/* Each of categories */}
                      {
                        ["electronics", "jewelery", "men's clothing", "women's clothing"].map((category) => (
                          <Link href={`/categories/${slugifyText(category)}`} className="capitalize text-sm font-medium transition-all duration-100 ease-in text-gray-500 hover:text-gray-900">{category}</Link>
                        ))
                      }
                    </div>
                  </motion.div>
                )
              }
            </AnimatePresence>
          </div>
          <div className="cursor-pointer p-2 text-gray-600 hover:font-medium hover:text-gray-900">
            <Link href="/about-us" className="flex items-center text-sm tracking-[-.5px]">
              Sobre nosotros
            </Link>
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
