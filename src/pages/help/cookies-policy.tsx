import Head from "next/dist/shared/lib/head"
import { BiCookie } from "react-icons/bi"
import { MainLayout } from "~/components"

const CookiesPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Panda - Cookies Policy</title>
      </Head>
      <MainLayout>
        <div className="bg-gray-100 py-12 mx-6 sm:mx-10">
          <div className="mt-4 mb-24 mx-auto max-w-[60rem] w-full flex flex-col items-center gap-20">
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="font-merriweather text-center font-bold text-4xl">Cookies Privacy</h1>
              <BiCookie className="w-32 h-32 text-amber-500" />
            </div>
            <div className="break-all mx-4 sm:mx-10 text-sm flex flex-col gap-6">
              {/* Introduction */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Introduction</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  We use cookies on our website to enhance your browsing experience and improve our services. This Cookies Privacy Policy explains how we use cookies, what types of cookies we use, and how you can control them.
                </p>
              </div>
              {/* What are cookies? */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">What are cookies?</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  Cookies are small data files that are placed on your device when you visit our website. Cookies allow us to remember your preferences and improve your browsing experience by providing you with a more personalized experience.
                </p>
              </div>
              {/* Types of cookies we use */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Types of cookies we use</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">We use different types of cookies on our website:</p>
                <ul className="px-4 text-dark-primary list-decimal leading-5 md:mx-20 md:px-0">
                  <li>
                    <span className="font-medium">Essential cookies:</span>These cookies are necessary for our website to function properly. They enable you to browse our website and use its features, such as accessing secure areas and making transactions.
                  </li>
                  <li>
                    <span className="font-medium">Analytical cookies:</span>These cookies collect information about how you use our website, such as which pages you visit and how long you spend on each page. We use this information to improve our website and tailor it to your needs.
                  </li>
                  <li>
                    <span className="font-medium">Performance cookies:</span>These cookies allow us to monitor the performance of our website and improve its functionality.
                  </li>
                  <li>
                    <span className="font-medium">Functional cookies:</span>These cookies allow us to remember your preferences, such as your language or the products you have added to your shopping cart.
                  </li>
                  <li>
                    <span className="font-medium">Targeting cookies:</span>These cookies collect information about your browsing habits and help us provide you with more relevant content and personalized ads.
                  </li>
                </ul>
              </div>
              {/* Third-party cookies */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Third-party cookies</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  We use third-party services, such as Google Analytics and Facebook, to analyze website traffic and improve our marketing efforts. These services may use cookies to collect information about your browsing habits and track your behavior across different websites. We do not have control over these cookies and are not responsible for their privacy practices. We recommend that you read the privacy policies of these third-party services to understand how they use your data.
                </p>
              </div>
              {/* How to control cookies */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">How to control cookies</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  You can control cookies by adjusting your browser settings. You can choose to block all cookies or only certain types of cookies. However, please note that blocking cookies may affect your ability to use some of the features of our website.
                </p>
              </div>
              {/* Updates to this policy */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Updates to this policy</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  We reserve the right to update this Cookies Privacy Policy from time to time. We will post any updates on our website and notify you of any material changes. Please review this policy periodically for any updates or changes.
                </p>
              </div>
              {/* Contact us */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Contact us</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  If you have any questions or concerns about our use of cookies or this Cookies Privacy Policy, please contact us at <span className="font-medium">darwinccn25@gmail.com</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default CookiesPolicyPage