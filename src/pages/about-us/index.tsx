import Head from "next/head"
import { MainLayout } from "~/components"

import Panda from "../../../public/panda.svg"

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>Panda - About us</title>
      </Head>
      <MainLayout>
        <div className="mx-auto relative flex flex-col items-center justify-center">
          <Panda heigth={400} width={400} />
        </div>
        <div className="mx-auto max-w-[50rem]">
          <h1 className="text-4xl text-dark-primary text-center uppercase tracking-[-3px]">Sobre Nosotros</h1>
          <p className="mt-12 text-dark-primary tracking-[-.4px]">
          In Panda, we are more than an online store. We are a community of people passionate about fashion, technology, home, and lifestyle in general. Our team is made up of experts in each of these areas, allowing us to offer a carefully curated selection of products to meet the needs of each customer.
          </p>
          <p className="mt-4 text-dark-primary tracking-[-.4px]">
          We also believe in the importance of sustainability. That&apos;s why we partner with suppliers and manufacturers who share our passion for protecting the environment. We strive to offer high-quality and affordable products that are also ethical and sustainable.
          </p>
          <p className="mt-4 text-dark-primary tracking-[-.4px]">
          Furthermore, we know that our customers are the reason we exist. Therefore, we are always willing to listen to their feedback and suggestions. We strive to provide exceptional customer service and do our best to ensure customer satisfaction at every stage of the purchasing process.
          </p>
          <p className="mt-4 text-dark-primary tracking-[-.4px]">
          In summary, at Panda, we are dedicated to offering a unique and exceptional online shopping experience. We hope you enjoy browsing through our carefully selected product range and find everything you need to complement your lifestyle. Thank you for choosing Panda as your trusted online store!
          </p>
        </div>
      </MainLayout>
    </>
  )
}

export default AboutUsPage