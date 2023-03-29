import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

import { useContext, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";

import { Footer, Navbar, Sidebar } from "~/components";
import { UIContext } from "~/context/ui";
import { useClickOutside } from "~/hooks";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  banner?: React.ReactNode;
}

// Backdrop
const backdropVariants: Variants = {
  open: {
    opacity: 0.3,
  },
  closed: {
    opacity: 0,
  },
}
// Sidebar Desktop
const sidebarVariants: Variants = {
  open: {
    x: 0,
  },
  closed: {
    x: '150%',
  },
}
const sidebarTransition: Transition = {
  duration: 0.2,
  ease: 'linear',
  delay: 0.15,
}

export const MainLayout: React.FC<Props> = ({ children, banner }) => {
  const { isSidebarOpen, toggleSidebar } = useContext(UIContext)
  const sidebarContainerRef = useRef<HTMLDivElement>(null)
  useClickOutside(sidebarContainerRef, () => toggleSidebar())

  const { data, status } = useSession()
  console.log({ data,status })
  
  return (
    <div className='font-inter relative min-h-screen bg-white'>
      {/* Cuppon for this month */}
      <div className="w-full z-10 bg-amber-500 text-white text-xs text-center font-medium tracking-[1px] px-4 py-2">
        <p className="uppercase font-merriweather">Use code <span className="font-semibold">PANDA</span> for 10% off
          and free shipping on all orders over $50
        </p>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Banner with screen width if exists */}
      {
        banner && 
        ( 
          <div className="relative z-0 w-full max-h-screen">
            {banner}
          </div>
        )
      }

      {/* Content */}
      {
        children && <div className="relative z-0 mx-auto my-4 max-w-[80rem]">{children}</div>
      }
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {
          isSidebarOpen && (
            <div className="fixed z-50 top-0 flex w-full min-h-screen">
              <motion.div 
                initial="closed"
                animate="open"
                exit="closed"
                variants={backdropVariants}
                className="bg-black contrast-50 min-h-screen flex-1" 
              />
              <motion.div
                ref={sidebarContainerRef}
                initial="closed"
                animate="open"
                exit="closed"
                transition={sidebarTransition}
                variants={sidebarVariants}
                className="fixed bottom-0 h-[calc(100vh-5rem)] w-full sm:right-0 sm:top-0 sm:w-auto sm:h-auto sm:min-h-screen sm:min-w-[30rem] bg-white shadow-lg sm:flex-1 sm:z-50"
              >
                  <Sidebar />
              </motion.div>
            </div>
          )
        }
      </AnimatePresence>
      {/* Footer */}
      <Footer />
      {/* Página en construcción */}
      <div className="fixed bottom-0 z-10 left-0 h-20 w-full bg-amber-500">
          <div className="mx-auto max-w-lg text-center text-white text-lg leading-5 font-semibold tracking-[-0.5px] h-full flex flex-col justify-center items-center">
            <div className="flex text-xs font-bold text-dark-primary">
                <p>Check out the code on<Link aria-label="Github code" href="https://github.com/suzubki/t3-ecomm" target='_blank' className="underline cursor-pointer"> GitHub</Link>
                <AiFillGithub className="relative inline-block h-4" />
                . Developed by <Link href="https://dev-dana.com" aria-label="Devdana project - Pandas ecommerce" className="underline cursor-pointer" target='_blank'>Darwin Narro</Link></p>
            </div>
            <div className="text-xs sm:text-base flex flex-col">
              <span className="text-xs">This page is still under development.</span>
              <span>Tailwind + Typescript + TRPC + Next.js + Framer Motion</span>
            </div>
          </div>
      </div>
    </div>
  );
};
