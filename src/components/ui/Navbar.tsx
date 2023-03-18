import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineChevronRight } from "react-icons/hi";
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
  useClickOutside(searchContainer, () => setIsCollapsed(false))

  // Mobile menu
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  return (
    <div className="shadow-lg bg-light-primary w-full">
      <nav className="flex relative flex-wrap items-center justify-between px-6 py-3 max-w-[80rem] mx-auto">
        {/* Logo, categories, and about us */}
        <div className="flex items-center justify-center w-full md:justify-start md:w-auto md:mr-6 md:flex-row md:gap-2 lg:gap-4">
          {/* Logo */}
          <div className="py-4 md:py-0 flex flex-shrink-0 justify-center items-center text-white">
            <button className="text-xl font-semibold tracking-tight">
              <Link href="/" className="text-4xl md:text-2xl font-bold text-dark-primary">
                Panda
              </Link>
            </button>
          </div>
          {/* Items */}
          <div className="invisible hidden md:visible md:flex md:items-center md:gap-1 lg:gap-4">
            <div
              className="relative z-50 border-b-solid cursor-pointer border-b-2 text-gray-600 hover:border-b-solid hover:border-b-gray-900"
            >
              <button
                className="p-2 flex items-center text-sm tracking-[-.5px] hover:font-medium hover:text-gray-900"
                onMouseEnter={() => setIsCollapsed(true)}
              >
                Categories
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
                            <Link href={`/categories/${slugifyText(category)}`} key={category} className="capitalize text-sm font-medium transition-all duration-100 ease-in text-gray-500 hover:text-gray-900">{category}</Link>
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
                About us
              </Link>
            </div>
          </div>
        </div>
        {/* Search bar, log in, and cart */}
        <div className="invisible hidden md:visible md:flex md:gap-1 lg:gap-6">
          {/* Search Icon */}
          <div
            className="flex items-center gap-2 p-2"
            ref={searchContainer}
            onClick={() => handleClickSearchContainer()}
          >
            <AiOutlineSearch className="text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="border-b-2 border-solid border-b-gray-300 bg-light-primary font-medium placeholder:text-xs focus:border-b-dark-primary focus:outline-none"
            />
          </div>
          {/* User Icon */}
          <div className="flex cursor-pointer items-center gap-1 p-2 text-gray-500 hover:font-medium hover:text-gray-600">
            <BiUserCircle className="text-xl" />
            <span className="text-xs tracking-[-.5px]">Log in</span>
          </div>
          {/* Carrito */}
          <div className="relative mr-4 flex cursor-pointer items-center gap-1 p-2 text-gray-500 hover:font-medium hover:text-gray-600" onClick={() => toggleSidebar()}>
            <AiOutlineShoppingCart className="text-xl" />
            <span className="text-xs tracking-[-.5px]">Cart</span>
            <div className="absolute top-0 -right-2 bg-dark-primary rounded-full flex justify-center items-center w-5 h-5 text-xs text-white">
              {state.length}
            </div>
          </div>
        </div>
        {/* Mobile -- Menu section */}
        <div className="fixed bottom-0 left-0 z-50 w-full visible md:invisible md:hidden">
          <AnimatePresence mode="wait">
            {
              isMenuCollapsed && (
                <motion.div initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: 10
                }}
                className="relative top-[1px] origin-bottom bg-gray-100 mx-5">
                  <div className="relative">
                      <div className="flex flex-col">
                        <Link href="/" className="px-4 py-2 relative w-full text-sm text-center tracking-[1px]">
                          <div className="w-full flex items-center gap-2">
                            <span className="flex-1">CATEGORIES</span>
                            <HiOutlineChevronRight className="absolute right-[14.5px] w-4 h-auto" />
                          </div>
                        </Link>
                        <Link href="/" className="px-4 py-2 text-sm text-center tracking-[1px]">ABOUT US</Link>
                        <Link href="/" className="px-4 py-2 relative w-full text-sm text-center tracking-[1px]">
                          <div className="w-full flex items-center gap-2">
                            <span className="flex-1">LOG IN</span>
                            <BiUserCircle className="absolute right-4 w-4 h-auto" />
                          </div>
                        </Link>
                        <Link href="/" className="px-4 py-2 text-sm text-center tracking-[1px]">REGISTER</Link>
                        <Link href="/" className="px-4 py-2 relative w-full text-sm text-center tracking-[1px]">
                          <div className="w-full flex items-center gap-2">
                            <span className="flex-1">SEARCH</span>
                            <AiOutlineSearch className="absolute right-4 w-4 h-auto" />
                          </div>
                        </Link>
                      </div>
                  </div>
                </motion.div>
              ) 
            }
          </AnimatePresence>
          <div className="mx-5 mb-5 bg-gray-100 shadow-sm">
            <button className="py-2 px-6 h-16 gap-3 flex items-center justify-center text-black w-full hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu" onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}>
              {
                isMenuCollapsed ? (
                  <AiOutlineClose className="w-6 h-auto" />
                ) : (
                  <div className="flex gap-2">
                    <RxHamburgerMenu className="w-5 h-auto" />
                    <span className="text-xl">MENU</span>
                  </div>
                )
              }
            </button>
          </div>        
        </div>
      </nav>
    </div>
  );
};
