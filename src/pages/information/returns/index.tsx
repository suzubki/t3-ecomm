import Head from "next/head"
import { DescriptionItem, MainLayout, SidebarInformation } from "~/components"

const ReturnsPage = () => {
  return (
    <>
      <Head>
        <title>Panda - Returns</title>
      </Head>
      <MainLayout>
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="mx-10">
            <SidebarInformation />
          </div>
          <div className="py-10 flex flex-col gap-10 sm:gap-20 sm:py-20">
            <h2 className="mx-10 sm:mx-20 text-4xl text-center font-semibold tracking-[-1px]">Returns & Refunds</h2>
            <p className="mx-10 sm:mx-20">
              Welcome to our Returns & Refunds page. We want to make sure that you are completely satisfied with your purchase from our store. If for any reason you are not satisfied, we are here to help you. Please read the following information carefully to understand our return policy and procedures.
            </p>
            <div className="flex flex-col gap-10">
              <DescriptionItem title="Return Policy" description="We accept returns within 30 days from the date of purchase. To be eligible for a return, the item must be unused, in its original packaging, and in the same condition that you received it. Please note that some items are not eligible for returns, such as personalized items or perishable goods." />
              <DescriptionItem title="Refunds" description="Once we receive your returned item, we will inspect it and notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If your refund is approved, we will initiate a refund to your original payment method. Please note that it may take some time for your refund to be processed and appear in your account." />
              <DescriptionItem title="Exchange" description="If you would like to exchange an item, please contact us at darwinccn25@gmail.com and we will be happy to assist you with the exchange process." />
              <DescriptionItem title="Shipping" description="You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund." />
              <DescriptionItem title="Contact Us" description="If you have any questions about our return policy or procedures, please feel free to contact us at darwinccn25@gmail.com and we will be happy to assist you." />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default ReturnsPage