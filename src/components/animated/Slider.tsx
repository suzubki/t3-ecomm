import { motion } from 'framer-motion'
import Image from 'next/image'

export const Slider = () => {
  return (
    <div style={{ position: "relative", maxWidth: "100vw", height: 'calc(100vh - 10rem)' }} className="mb-20 max-h-screen overflow-x-hidden">
      <Image className="absolute object-cover" alt="louis-hansel-KSEBjE1MF0g-unsplash" src={'/images/slider/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg'} fill />

      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        }}
        className='origin-bottom-left absolute w-48 h-1.5 bg-white bottom-16 right-16'
      />
    </div>
  ) 
}