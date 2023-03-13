import { motion, AnimatePresence, Transition, Variants } from "framer-motion";
import { FC, ReactNode, useContext, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";

import { Footer, Navbar, Sidebar } from "~/components";
import { UIContext } from "~/context/ui";
import { useClickOutside } from "~/hooks";

interface Props {
  children: ReactNode;
}

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
const backdropVariants: Variants = {
  open: {
    opacity: 0.3,
  },
  closed: {
    opacity: 0,
  },
}

export const MainLayout: FC<Props> = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useContext(UIContext)
  const sidebarContainerRef = useRef<HTMLDivElement>(null)
  useClickOutside(sidebarContainerRef, () => toggleSidebar())
  
  return (
    <motion.div animate={{
    }} className='relative min-h-screen bg-white'>
      {/* Navbar */}
      <Navbar />
      {/* Contenido */}
      <div className="relative z-0 mx-auto my-4 max-w-[78rem]">{children}</div>
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {
          isSidebarOpen && (
            <div className="fixed z-20 top-0 flex w-full min-h-screen">
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
                className="fixed right-0 top-0 min-h-screen min-w-[30rem] bg-white shadow-lg z-50"
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
                <p>Revisa el código en <span className="underline cursor-pointer"> GitHub</span>
                <AiFillGithub className="relative inline-block h-4" />
                . Desarrrollado por <span className="underline cursor-pointer">Darwin Narro</span></p>
            </div>
            <div className="flex flex-col">
              <span>Está pagina aún se encuentra en construcción.</span>
              <span>Tailwind + Typescript + TRPC + Next.js + Framer Motion</span>
            </div>
          </div>
      </div>
    </motion.div>
  );
};
