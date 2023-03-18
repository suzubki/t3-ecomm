import Head from "next/head"
import { DescriptionItem, MainLayout, SidebarInformation } from "~/components"

const FrequentlyAskedQuestionsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Panda - Frequently Asked Questions</title>
      </Head>
      <MainLayout>
        <div className="flex mt-10">
          <SidebarInformation />
          <div className="py-20 flex flex-col gap-20">
            <h2 className="text-4xl text-center font-semibold tracking-[-1px]">Frequently asked questions - FAQ</h2>
            <p className="mx-20">
              Welcome to our FAQ section! We understand that you may have some questions about our products, policies, and services. To make things easier for you, we&apos;ve compiled a list of frequently asked questions and provided detailed answers to each one. If you don&apos;t find the information you&apos;re looking for here, please feel free to contact our customer support team. We&apos;re always here to help!
            </p>
            <div className="flex flex-col gap-10">
              <DescriptionItem title="What forms of payment do you accept?" description="We accept Visa, Mastercard, American Express, Discover, PayPal, and Apple Pay." />
              <DescriptionItem title="How can I track my order?" description="Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track your order on our website or the carrier's website." />
              <DescriptionItem title="What is your return policy?" description="We accept returns within 30 days of delivery for items that are unused and in their original packaging. Please contact us for a return authorization and instructions." />
              <DescriptionItem title="How long will it take for my order to arrive?" description="Typically, orders are processed and shipped within 1-3 business days, and delivery can take anywhere from 3-10 business days." />
              <DescriptionItem title="Do you offer free shipping?" description="We offer free standard shipping on orders over $50 within the continental United States. Some restrictions apply." />
              <DescriptionItem title="Can I cancel or change my order after it has been placed?" description="We make every effort to process and ship orders quickly, but if you need to cancel or change your order, please contact us as soon as possible. Once an order has been shipped, it cannot be canceled or changed." />
              <DescriptionItem title="How do I contact customer support?" description="You can contact our customer support team via email or phone. Our email address is support@panda.com, and our phone number is 1-800-PANDA-123." />
              <DescriptionItem title="Is my personal information secure?" description="We take the security of your personal information very seriously. We use industry-standard encryption and security protocols to protect your data." />
              <DescriptionItem title="Do you ship internationally?" description="Yes, we ship to many countries around the world. Shipping rates and delivery times vary depending on the destination." />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default FrequentlyAskedQuestionsPage