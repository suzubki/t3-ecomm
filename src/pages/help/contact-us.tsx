import Head from "next/head"
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai"
import { BsPersonBadge } from "react-icons/bs"
import { MdOutlineFindInPage } from "react-icons/md"
import { MainLayout } from "~/components"

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <MainLayout>
        <div className="bg-gray-100 py-12 mx-6 sm:mx-10">
          <div className="mt-4 mb-24 md:mb-48 mx-auto max-w-[60rem] w-full flex flex-col items-center gap-20">
            <h1 className="font-merriweather font-bold text-4xl">Contact Us</h1>
            <div className="flex gap-6 flex-col md:flex-row">
              {/* BY ADRESS */}
              <div className="flex-1 flex items-center flex-col gap-4">
                {/* Icon container */}
                <div className="flex justify-center items-center">
                  {/* Icon */}
                  <BsPersonBadge className="w-32 h-32 text-amber-500" />
                </div>
                <div className="flex flex-col items-center gap-8">
                  {/* Title */}
                  <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">By Adress</h2>
                  {/* Contact */}
                  <div className="break-all px-10 flex flex-col gap-4 items-center text-sm">
                    <p className="break-words text-center text-dark-primary leading-5 md:px-4">
                      We are always happy to hear from our customers. If you have any questions, concerns or feedback, please don&apos;t hesitate to get in touch with us.
                    </p>
                    <div className="break-words flex flex-col items-center text-center font-medium">
                      <span className="text-gray-500">Email</span>darwinccn25@gmail.com
                    </div>
                    <div className="flex flex-col items-center text-center font-medium">
                      <span className="text-gray-500">Phone</span> +1-555-123-4567
                    </div>
                    <div className="flex flex-col items-center text-center font-medium">
                      <span className="text-gray-500">Address</span> 123 Main St, Suite 100, Anytown USA
                    </div>
                  </div>
                </div>
              </div>
              {/* SOCIAL MEDIA */}
              <div className="flex-1 flex items-center flex-col gap-4">
                {/* Icon container */}
                <div className="flex justify-center items-center">
                  {/* Icon */}
                  <MdOutlineFindInPage className="w-32 h-32 text-amber-500" />
                </div>
                <div className="flex flex-col items-center gap-8">
                  {/* Title */}
                  <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Social Medias</h2>
                  {/* Contact */}
                  <div className="px-10 flex flex-col gap-8 items-center text-sm">
                    <p className="px-4 text-center text-dark-primary leading-5 md:px-0">
                      Our customer support team is available Monday through Friday, 9am - 5pm EST. We do our best to respond to all inquiries within 24 hours.<br/>
                      You can also reach out to us through our social media channels
                    </p>
                    <div className="mx-6 flex flex-wrap justify-center gap-6 sm:gap-10">
                      <div className="flex flex-col justiy-center items-center">
                        <span className="font-medium text-gray-500 text-xs text-center">Facebook</span>
                        <AiFillFacebook className="inline-block w-10 h-auto" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-medium text-gray-500 text-xs text-center">Twitter</span>
                        <AiFillTwitterCircle className="inline-block w-10 h-auto" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-medium text-gray-500 text-xs text-center">Instagram</span>
                        <AiFillInstagram className="inline-block w-10 h-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default ContactUsPage