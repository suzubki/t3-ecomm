import Head from "next/head"
import { DescriptionItem, MainLayout, SidebarInformation } from "~/components"

const DeliveryPage = () => {
  return (
    <>
      <Head>
        <title>Panda - Delivery</title>
      </Head>
      <MainLayout>
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="mx-10">
            <SidebarInformation />
          </div>
          <div className="py-10 flex flex-col gap-10 sm:gap-20 sm:py-20">
            <h2 className="mx-10 sm:mx-20 text-4xl text-center font-semibold tracking-[-1px]">Delivery</h2>
            <p className="mx-10 sm:mx-20">
              Welcome to our delivery page! At Panda, we understand that getting your order to you as quickly and efficiently as possible is important. That&apos;s why we offer a range of shipping options to meet your needs. We want to make sure that you have all the information you need about our shipping policies and procedures so that you can make an informed decision when choosing a shipping option. Please read on for more information about our shipping options, rates, and delivery times. If you have any questions, please don&apos;t hesitate to contact us. We&apos;re always here to help!
            </p>
            <div className="flex flex-col gap-10">
              <DescriptionItem title="Delivery Information" description="At Panda, we strive to provide the best possible delivery service for our customers. Our delivery options are designed to be flexible, reliable and affordable." />
              <DescriptionItem title="Shipping Options" description={
                  <>
                    We offer a variety of shipping options to meet your needs. The available options may vary depending on your location and the size and weight of your order. Some of the shipping options we offer include:
                    <br/>
                    <div className="mt-4 ml-4 sm:ml-8">
                      <span className="inline font-medium">- Standard shipping:</span> This is our most economical option and typically takes 3-5 business days to arrive. <br/>
                      <span className="inline font-medium">- Expedited shipping:</span> This option is faster than standard shipping and typically takes 2-3 business days to arrive. <br/>
                      <span className="inline font-medium">- Overnight shipping:</span> This is our fastest option and is guaranteed to arrive the next business day.
                    </div>
                  </>
                }
              />
              <DescriptionItem title="Shipping Rates" description="Our shipping rates are calculated based on the weight and dimensions of your order, as well as the shipping destination. You can see the shipping costs for your order during the checkout process." />
              <DescriptionItem title="Delivery Times" description="Delivery times may vary depending on your location and the shipping option you choose. Once your order has been shipped, you will receive a confirmation email with a tracking number so that you can track your package." />
              <DescriptionItem title="International Shipping" description="We offer international shipping to select countries. Please note that international orders may be subject to additional fees, such as customs duties and taxes. These fees are the responsibility of the customer and are not included in the shipping cost." />
              <DescriptionItem title="Returns and Refunds" description="If you are not satisfied with your order, you may return it for a refund or exchange. Please see our Returns and Refunds page for more information." />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default DeliveryPage