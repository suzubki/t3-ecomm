import Link from "next/link"
import { useRouter } from "next/router"
import { BsPatchQuestion } from "react-icons/bs"
import { IoNewspaperOutline } from "react-icons/io5"
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb"

export const SidebarInformation: React.FC = () => {
  const router = useRouter()
  const { route } = router

  return (
    <div className="bg-amber-500 h-min rounded-r-md">
      <div className="flex flex-col lg:min-w-[18.75rem] lg:max-w-[18.75rem]">
        <Link href="/information" className={`py-3 px-6 rounded-sm border-solid border-b-2 ${route === "/information" ? "text-light-primary" : "text-dark-primary hover:text-light-primary"}`}>
          <h1 className=" text-sm tracking-[-0.3px] text-center font-medium">Legal Information</h1>
        </Link>
        <Link href="/information/terms-and-conditions" className={`relative py-3 px-6 flex items-center gap-3 rounded-sm border-solid border-b-2 ${route === "/information/terms-and-conditions" ? "text-light-primary" : "text-dark-primary hover:text-light-primary"}`}>
          <div className="flex items-center">
            <IoNewspaperOutline className="w-10 h-10 bg-amber-500 text-light-primary p-1.5 rounded-full" />
          </div>
          <h1 className="text-sm font-medium tracking-[-0.5px] leading-5">Terms and conditions</h1>
          {
            route === "/information/terms-and-conditions" && (
              <div className="w-2 h-full bg-amber-500 absolute left-0"/>
            )
          }
        </Link>
        <Link href="/information/frequently-asked-questions" className={`relative py-3 px-6 flex items-center gap-3 rounded-sm border-solid border-b-2 ${route === "/information/frequently-asked-questions" ? "text-light-primary" : "text-dark-primary hover:text-light-primary"}`}>
          <div className="flex items-center">
            <BsPatchQuestion className="w-10 h-10 bg-amber-500 text-light-primary p-1.5 rounded-full" />
          </div>
          <h1 className="text-sm font-medium tracking-[-0.5px] leading-5">Frequently asked questions</h1>
          {
            route === "/information/frequently-asked-questions" && (
              <div className="w-2 h-full bg-amber-500 absolute left-0"/>
            )
          }
        </Link>
        <Link href="/information/delivery" className={`relative py-3 px-6 flex items-center gap-3 rounded-sm border-solid border-b-2 ${route === "/information/delivery" ? "text-light-primary" : "text-dark-primary hover:text-light-primary"}`}>
          <div className="flex items-center">
            <TbTruckDelivery className="w-10 h-10 stroke-1 bg-amber-500 text-light-primary p-1.5 rounded-full" />
          </div>
          <h1 className="text-sm font-medium tracking-[-0.5px] leading-5">Delivery</h1>
          {
            route === "/information/delivery" && (
              <div className="w-2 h-full bg-amber-500 absolute left-0"/>
            )
          }
        </Link>
        <Link href="/information/returns" className={`relative py-3 px-6 flex items-center gap-3 rounded-sm border-solid border-b-2 ${route === "/information/returns" ? "text-light-primary" : "text-dark-primary hover:text-light-primary"}`}>
          <div className="flex items-center">
            <TbTruckReturn className="w-10 h-10 stroke-1 bg-amber-500 text-light-primary p-1.5 rounded-full" />
          </div>
          <h1 className="text-sm font-medium tracking-[-0.5px] leading-5">Returns & Refunds</h1>
          {
            route === "/information/returns" && (
              <div className="w-2 h-full bg-amber-500 absolute left-0"/>
            )
          }
        </Link>

      </div>
    </div>
  )
}