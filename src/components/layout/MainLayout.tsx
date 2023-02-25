import { AnimatePresence, motion, Variants } from "framer-motion";
import { FC, ReactNode, useContext, useRef } from "react";
import { Footer, Navbar, Sidebar } from "~/components";
import { UIContext } from "~/context/ui";
import { useClickOutside } from "~/hooks/useClickOutside";

interface Props {
  children: ReactNode;
}

const variants: Variants = {
  open: {
    x: 0,
  },
  closed: {
    x: '100%',
    transition: { duration: 0.3 }
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
      {/* TODO: Agregar framer-motion */}
      <AnimatePresence mode="wait">
        {
          isSidebarOpen && (
            <motion.div
              initial={{
                x: 0,
              }}
              animate={{
                x: '100%',
              }}
              exit={{
                x: 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className="fixed bg-black top-0 min-h-screen w-full flex"
            >
                <Sidebar />
            </motion.div>
          )
        }
      </AnimatePresence>
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
