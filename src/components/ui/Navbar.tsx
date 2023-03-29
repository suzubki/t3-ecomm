import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useContext, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import { AnimatedTypedText } from "~/components";

import { UIContext } from "~/context/ui";
import { CartContext } from "~/context";
import { useClickOutside } from "~/hooks";
import { slugifyText } from "~/utils";

export const Navbar = () => {
  // User auth
  const userSession = useSession()


  const searchContainer = useRef<HTMLDivElement>(null);
  const handleClickSearchContainer = () => {
    // focus input search
    searchContainer.current?.querySelector("input")?.focus();
  };

  const { toggleSidebar } = useContext(UIContext)
  const { state } = useContext(CartContext)
  // Desktop account is collapsed
  const [isCollapsedAccountDesktop, setIsCollapsedAccountDesktop] = useState(false);

  // Desktop Categories is collapsed
  const [isCollapsedDesktop, setIsCollapsedDesktop] = useState(false);  
  useClickOutside(searchContainer, () => setIsCollapsedDesktop(false))
  // Mobile Categories is collapsed
  const [isCategoriesCollapsedMobile, setIsCategoriesCollapsedMobile] = useState(false);

  // Mobile menu
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  return (
    <div className="shadow-lg bg-light-primary w-full">
      <nav className="flex relative flex-wrap items-center justify-between px-6 py-3 max-w-[80rem] mx-auto">
        {/* Logo, categories, and about us */}
        <div className="flex items-center justify-center w-full md:justify-start md:w-auto md:flex-row md:gap-2 lg:gap-4">
          {/* Logo */}
          <div className="py-2 md:h-auto md:py-0 flex justify-center items-center text-white">
            <button className="text-xl font-semibold tracking-tight">
              <Link href="/" className="font-merriweather">
                <h1 className="text-4xl h-10 font-merriweather md:mr-4 font-bold text-dark-primary w-28">
                  <AnimatedTypedText text="panda." />
                </h1>
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
                onMouseEnter={() => setIsCollapsedDesktop(true)}
              >
                Categories
                {/* Icon arrow down */}
                <MdKeyboardArrowDown className="text-xl" />
              </button>
              <AnimatePresence>
                {
                  isCollapsedDesktop && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute z-50 -left-2 w-56 top-9 bg-light-primary shadow-lg rounded-md p-4"
                      onMouseEnter={() => setIsCollapsedDesktop(true)}
                      onMouseLeave={() => setIsCollapsedDesktop(false)}
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
            className="w-48 flex items-center gap-2 p-2"
            ref={searchContainer}
            onClick={() => handleClickSearchContainer()}
          >
            <AiOutlineSearch className="text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-b-2 border-solid border-b-gray-300 bg-light-primary font-medium placeholder:text-xs focus:border-b-dark-primary focus:outline-none"
            />
          </div>
          {/* User */}
          {
            userSession.status === "authenticated" ? (
              <div className="order-1 relative cursor-pointer">
                <div className="flex text-xs max-w-[8rem] overflow-x-hidden font-medium items-center gap-1 p-2 text-gray-500 hover:font-medium hover:text-gray-600" onClick={() => setIsCollapsedAccountDesktop(!isCollapsedAccountDesktop)}>
                  { userSession.data.user.image ? (<img className="w-6 h-6 rounded-full" alt={`${userSession.data.user.name} - ${userSession.data.user.id}`} src={ userSession.data.user.image } />) : <BiUserCircle className="text-xl" /> }
                  { userSession.data.user.name }
                </div>
                { isCollapsedAccountDesktop && (
                  <div className="absolute z-50 -left-2 bg-light-primary top-10 border border-gray-200 w-56 shadow-lg rounded-md p-4">
                    <div className="flex flex-col gap-4">
                      <Link href="/account/profile" className="capitalize text-sm font-medium transition-all duration-100 ease-in text-gray-500 hover:text-gray-900">Profile</Link>
                      <Link href="/account/orders" className="capitalize text-sm font-medium transition-all duration-100 ease-in text-gray-500 hover:text-gray-900">Orders</Link>
                      <Link href="/account/logout" className="capitalize text-sm font-medium transition-all duration-100 ease-in text-gray-500 hover:text-gray-900" onClick={() => signOut()}>Logout</Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
            <div className="flex cursor-pointer items-center gap-1 p-2 text-gray-500 hover:font-medium hover:text-gray-600">
              <BiUserCircle className="text-xl" />
              <Link href="/account/login" aria-label="Login" className="text-xs tracking-[-.5px]">Log in</Link>
            </div>
            )
          }
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
        <div className="fixed bottom-[60px] left-0 z-50 w-full visible md:invisible md:hidden">
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
                  <div className="relative overflow-x-hidden">
                    <AnimatePresence mode="wait" >
                      {
                        !isCategoriesCollapsedMobile ?
                        (
                          <motion.div
                            key="menu"
                            exit={{
                              opacity: 0,
                              x: 120
                            }}
                            className="flex flex-col"
                            transition={{
                              duration: 0.3,
                            }}
                            
                            >
                              {/* Categories */}
                              <div className="px-4 py-2 relative w-full text-sm text-center tracking-[0.7px]" onClick={() => setIsCategoriesCollapsedMobile(true)}>
                                <div className="w-full flex items-center gap-2">
                                  <span className="flex-1">CATEGORIES</span>
                                  <HiOutlineChevronRight className="absolute right-[14.5px] w-4 h-auto" />
                                </div>
                              </div>
                              {/* About us */}
                              <Link href="/about-us" className="px-4 py-2 text-sm text-center tracking-[0.7px]">ABOUT US</Link>
                              {/* Log in */}
                              <Link href="/" className="px-4 py-2 relative w-full text-sm text-center tracking-[0.7px]">
                                <div className="w-full flex items-center gap-2">
                                  <span className="flex-1">LOG IN</span>
                                  <BiUserCircle className="absolute right-4 w-4 h-auto" />
                                </div>
                              </Link>
                              {/* Register */}
                              <Link href="/" className="px-4 py-2 text-sm text-center tracking-[0.7px]">REGISTER</Link>
                              {/* Search */}
                              <Link href="/" className="px-4 py-2 relative w-full text-sm text-center tracking-[0.7px]">
                                <div className="w-full flex items-center gap-2">
                                  <span className="flex-1">SEARCH</span>
                                  <AiOutlineSearch className="absolute right-4 w-4 h-auto" />
                                </div>
                              </Link>
                          </motion.div>
                        ) : 
                        (  
                          <motion.div
                            key="categories"
                            exit={{
                              opacity: 0,
                              x: -120
                            }}
                            className="flex flex-col"
                            transition={{
                              duration: 0.3,
                            }}
                            >
                              {/* Back */}
                              <div className="px-4 py-2 relative w-full text-sm text-center tracking-[0.7px]" onClick={() => setIsCategoriesCollapsedMobile(false)}>
                                <div className="w-full flex items-center gap-2">
                                  <HiOutlineChevronLeft className="absolute left-[14.5px] w-4 h-auto" />
                                  <span className="flex-1">BACK</span>
                                </div>
                              </div>
                              {/* JEWELERY */}
                              <Link href="/categories/jewelery" className="px-4 py-2 text-sm text-center tracking-[0.7px]">JEWELERY</Link>
                              {/* ELECTRONICS */}
                              <Link href="/categories/electronics" className="px-4 py-2 text-sm text-center tracking-[0.7px]">ELECTRONICS</Link>
                              {/* WOMENS CLOTHING */}
                              <Link href="/categories/womens-clothing" className="px-4 py-2 text-sm text-center tracking-[0.7px]">WOMEN&apos;S CLOTHING</Link>
                              {/* MENS CLOTHING */}
                              <Link href="/categories/mens-clothing" className="px-4 py-2 text-sm text-center tracking-[0.7px]">MEN&apos;S CLOTHING</Link>
                          </motion.div>
                        )
                      }
                    </AnimatePresence>
                  </div>
                </motion.div>
              ) 
            }
          </AnimatePresence>
          <div className="mx-5 mb-5 shadow-sm">
            <div 
              className="h-16 gap-3 text-black w-full hover:text-gray-600 focus:outline-none focus:text-gray-600" 
            >
              {
                isMenuCollapsed ? (
                  <button onClick={() =>{
                    setIsMenuCollapsed(!isMenuCollapsed)
                    setIsCategoriesCollapsedMobile(false)
                  }} className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <AiOutlineClose className="w-6 h-auto" />
                  </button>
                ) : (
                  <div className="h-full flex bg-white">
                    <button 
                      onClick={() =>{
                        setIsMenuCollapsed(!isMenuCollapsed)
                        setIsCategoriesCollapsedMobile(false)
                      }} 
                      className="bg-gray-100 flex-[4] flex justify-center items-center gap-2"
                      aria-label="toggle menu" 
                    >
                      <RxHamburgerMenu className="w-5 h-auto" />
                      <span className="text-xl">MENU</span>
                    </button>
                    <div className="bg-amber-400 flex-1 flex justify-center h-full bg-white">
                      <BsHandbag className="text-white w-8 h-auto" />
                    </div>
                  </div>
                )
              }
            </div>
          </div>        
        </div>
      </nav>
    </div>
  );
};