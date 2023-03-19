import { useEffect, useState } from "react"

interface Props {
  text: string
}

export const AnimatedTypedText: React.FC<Props> = ({
  text
}) => {
  const arr = text.split('')
  const [letters, setLetters] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [amount, setAmount] = useState<number>(1)

  useEffect(()=>{
    const interval = setInterval(()=> {
      if(currentIndex === 0){
        setAmount(1)
      }
      if(amount > 0 && currentIndex < arr.length){
        setLetters(arr.slice(0, amount + currentIndex))
        setCurrentIndex(currentIndex + 1)
      }
      if(currentIndex === arr.length){
        setAmount(-1)
      }
      if(amount < 0 && currentIndex > 0){
        setLetters(arr.slice(0, currentIndex + amount))
        setCurrentIndex(currentIndex - 1)
      }

    }, 600)

    return () => clearInterval(interval)
  }, [letters, amount])

  return (
    <div className="flex gap-[1px]">
      {letters.map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  )
}