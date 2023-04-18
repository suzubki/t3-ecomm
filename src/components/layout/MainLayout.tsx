import { motion, AnimatePresence } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

import { useContext, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";

import { Footer, Navbar, Sidebar } from "~/components";
import { UIContext } from "~/context/ui";
import { useClickOutside } from "~/hooks";
import Link from "next/link";

interface Props {
  children?: React.ReactNode;
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
};
// Sidebar Desktop
const sidebarVariants: Variants = {
  open: {
    x: 0,
  },
  closed: {
    x: "150%",
  },
};
const sidebarTransition: Transition = {
  duration: 0.2,
  ease: "linear",
  delay: 0.15,
};

export const MainLayout: React.FC<Props> = ({ children, banner }) => {
  const { isSidebarOpen, toggleSidebar } = useContext(UIContext);
  const sidebarContainerRef = useRef<HTMLDivElement>(null);
  useClickOutside(sidebarContainerRef, () => toggleSidebar());

  return (
    <div className="relative min-h-screen bg-white font-inter">
      {/* Cuppon for this month */}
      <div className="z-10 w-full bg-amber-500 px-4 py-2 text-center text-xs font-medium tracking-[1px] text-white">
        <p className="font-merriweather uppercase">
          Use code <span className="font-semibold">PANDA</span> for 10% off and
          free shipping on all orders over $50
        </p>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Banner with screen width if exists */}
      {banner && (
        <div className="relative z-0 max-h-screen w-full pb-16">{banner}</div>
      )}

      {/* Content */}
      {children && (
        <div className="relative z-0 mx-auto my-4 max-w-[80rem]">
          {children}
        </div>
      )}
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <div className="fixed top-0 z-50 flex min-h-screen w-full">
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              className="min-h-screen flex-1 bg-black contrast-50"
            />
            <motion.div
              ref={sidebarContainerRef}
              initial="closed"
              animate="open"
              exit="closed"
              transition={sidebarTransition}
              variants={sidebarVariants}
              className="fixed bottom-0 h-[calc(100vh-5rem)] w-full bg-white shadow-lg sm:right-0 sm:top-0 sm:z-50 sm:h-auto sm:min-h-screen sm:w-auto sm:min-w-[30rem] sm:flex-1"
            >
              <Sidebar />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Footer */}
      <div className="mt-24">
        <Footer />
      </div>
      {/* Página en construcción */}
      <div className="fixed bottom-0 left-0 z-10 h-20 w-full bg-amber-500">
        <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center text-center text-lg font-semibold leading-5 tracking-[-0.5px] text-white">
          <div className="flex text-xs font-bold text-dark-primary">
            <p>
              Check out the code on
              <Link
                aria-label="Github code"
                href="https://github.com/suzubki/t3-ecomm"
                target="_blank"
                className="cursor-pointer underline"
              >
                {" "}
                GitHub
              </Link>
              <AiFillGithub className="relative inline-block h-4" />. Developed
              by{" "}
              <Link
                href="https://dev-dana.com"
                aria-label="Devdana project - Pandas ecommerce"
                className="cursor-pointer underline"
                target="_blank"
              >
                Darwin Narro
              </Link>
            </p>
          </div>
          <div className="flex flex-col text-xs sm:text-base">
            <span className="text-xs">
              This page is still under development.
            </span>
            <span>Tailwind + Typescript + TRPC + Next.js + Framer Motion</span>
          </div>
        </div>
      </div>
    </div>
  );
};
