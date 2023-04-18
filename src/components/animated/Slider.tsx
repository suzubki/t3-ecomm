import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
  images: string[]
}

export const Slider: React.FC<Props> = ({ images }) => {
  // Represents the index of the current image
  const [ index, setIndex ] = useState(0)

  // Change the index of the current image
  const handleArrowKeysPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.key === 'ArrowRight' && index + 1 < images.length && setIndex(index + 1)
    e.key === 'ArrowLeft' && index >= 1 && setIndex(index - 1)
  }

  // Change the index of the current image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      index === images.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  },[index, setIndex, images])

  return (
    <div className="max-h-screen overflow-x-hidden relative">
      <div className='relative overflow-hidden relative z-full'>
        {/* Set to 6rem show the image with all the height as possible ^^ */}
        <motion.div 
          style={{ width: '100vw', height: 'calc(100vh - 10rem)' }} 
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex focus:outline-none" 
          tabIndex={0} 
          onKeyDown={handleArrowKeysPress}
        >
          {/* TODO: Add credits, could be a title prop */}
          {
            images.map((image) => (
              <Image 
                key={image} 
                className="aspect-[3/2] object-cover" 
                alt="louis-hansel-KSEBjE1MF0g-unsplash" 
                src={image} 
                width={1920} 
                height={1080} 
                style={{minWidth: '100vw', height: 'auto'}} 
                priority
              />
            ))
          }
        </motion.div>
      </div>
    </div>
  ) 
}
