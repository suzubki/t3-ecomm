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
        <div className="flex mt-10">
          <SidebarInformation />
          <div className="py-20 flex flex-col">
            <h2 className="text-4xl text-center font-semibold tracking-[-1px]">Legal Information</h2>
            <p className="mt-20 mx-20">At Panda, we care about protecting your privacy! We don&apos;t like small print and we&apos;re transparent. That&apos;s why we&apos;ve created this section to give you all the legal information you need at your fingertips: terms and conditions, frequently asked questions, delivery and returns.</p>
            <div className="flex justify-center items-center">
              <OnlineShopping width={400} height={300} />
              <div className="px-12 h-48 flex items-center bg-gray-100">
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