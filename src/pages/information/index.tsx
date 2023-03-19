import Head from "next/head"
import { MainLayout, SidebarInformation } from "~/components"
import OnlineShopping from "../../../public/icons/computer-display-two-color.svg"

const InformationPage = () => {
  return (
    <>
      <Head>
        <title>Panda - Información</title>
      </Head>
      <MainLayout>
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="mx-10">
            <SidebarInformation />
          </div>
          <div className="py-10 flex flex-col gap-10 sm:gap-20 sm:py-20">
            <h2 className="mx-10 sm:mx-20 text-4xl text-center font-semibold tracking-[-1px]">Legal Information</h2>
            <p className="mx-10 sm:mx-20">At Panda, we care about protecting your privacy! We don&apos;t like small print and we&apos;re transparent. That&apos;s why we&apos;ve created this section to give you all the legal information you need at your fingertips: terms and conditions, frequently asked questions, delivery and returns.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <OnlineShopping className="w-[80%] h-auto sm:w-[400px]" />
              <div className="px-6 mx-6 sm:mx-0 sm:px-12 h-32 sm:h-48 flex items-center bg-gray-100">
                <p className="text-base text-gray-500">
                  <span className="font-bold text-gray-700">Trust us</span>. We will always keep your data confidential and protect it with high security standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default InformationPage