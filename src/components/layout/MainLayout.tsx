import { motion, AnimatePresence, Transition, Variants } from "framer-motion";
import { FC, ReactNode, useContext, useRef } from "react";

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

            <div className="fixed top-0 flex w-full min-h-screen">
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
                className="fixed right-0 top-0 min-h-screen w-[20rem] bg-white shadow-lg z-50"
              >
                  <Sidebar />
              </motion.div>
            </div>
          )
        }
      </AnimatePresence>
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
