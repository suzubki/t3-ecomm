import { BsFillXDiamondFill } from "react-icons/bs"

interface Props{
  title: string;
  description: string | React.ReactNode;
}

export const DescriptionItem: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="flex items-center leading-6 gap-2 mx-6 sm:mx-12 py-1 px-4 border-b-solid border-b-2 border-b-gray-300 text-xl sm:text-2xl font-medium tracking-[-1px]">
        <div>
          <BsFillXDiamondFill className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
        {title}
      </h3>
      <p className="mx-10 sm:mx-20 tracking-tighter">{description}</p>
    </div>
  )
}