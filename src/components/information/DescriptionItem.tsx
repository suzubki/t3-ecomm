import { BsFillXDiamondFill } from "react-icons/bs"

interface Props{
  title: string;
  description: string | React.ReactNode;
}

export const DescriptionItem: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="flex items-center gap-1 mx-12 py-1 px-4 border-b-solid border-b-2 border-b-gray-300 text-2xl font-medium tracking-[-1px]">
        <BsFillXDiamondFill className="w-4 h-4" />{title}</h3>
      <p className="mx-20 tracking-tighter">{description}</p>
    </div>
  )
}