import Head from "next/head"
import { MainLayout } from "~/components"

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Panda - Privacy Policy</title>
      </Head>
      <MainLayout>
      <div className="bg-gray-100 py-12 mx-6 sm:mx-10">
          <div className="mt-4 mb-24 mx-auto max-w-[60rem] w-full flex flex-col items-center gap-20">
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="font-merriweather text-center font-bold text-4xl">Policy Privacy</h1>
            </div>
            <div className="mx-4 sm:mx-10 text-sm flex flex-col gap-6">
              {/* Introduction */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Introduction</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  At Panda, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines the types of personal information we collect, how we use and protect it, and your rights in relation to your personal information.
                </p>
              </div>
              {/* What are cookies? */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Information We Collect</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  When you use our website and services, we may collect personal information from you, such as your name, email address, billing and shipping address, and payment information. We may also collect non-personal information such as your IP address, browser type, and operating system.
                </p>
              </div>
              {/* Third-party cookies */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">How We Use Your Information</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  We use your personal information to process and fulfill orders, communicate with you about your order status, provide customer support, and to personalize your shopping experience. We may also use your information to send you promotional offers and updates about our products and services.
                </p>
              </div>
              {/* How to control cookies */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Protecting Your Information</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard security technologies and procedures to safeguard your personal information.
                </p>
              </div>
              {/* Updates to this policy */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Your Rights</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  You have the right to access, correct, or delete your personal information. You may also request that we restrict the processing of your personal information or object to its processing. To exercise these rights, please contact us at darwinccn25@gmail.com.
                </p>
              </div>
              {/* Updates to this policy */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Changes to This Policy</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  We may update this Privacy Policy from time to time to reflect changes in our business practices. If we make significant changes, we will notify you by email or by posting a notice on our website.
                </p>
              </div>
              {/* Contact us */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl uppercase font-semibold tracking-[-0.5px]">Contact us</h2>
                <p className="px-4 text-dark-primary leading-5 md:px-0 sm:mx-4">
                  If you have any questions or concerns about our Privacy Policy or our use of your personal information, please contact us at <span className="font-medium">darwinccn25@gmail.com</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default PrivacyPolicyPage