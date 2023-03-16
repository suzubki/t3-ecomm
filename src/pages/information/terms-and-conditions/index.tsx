import Head from "next/head"
import { DescriptionItem, MainLayout, SidebarInformation } from "~/components"

const TermsAndConditionsPage = () => {
  return (
    <>
      <Head>
        <title>Panda - Terms and Conditions</title>
      </Head>
      <MainLayout>
      <div className="flex mt-10">
        <SidebarInformation />
        <div className="py-20 flex flex-col gap-20">
          <h2 className="text-4xl text-center font-semibold tracking-[-1px]">Terms and conditions of access and use of the site</h2>
          <p className="mx-20">
            Welcome to Panda! These Terms and Conditions govern your use of our website and the products and services we offer. By using our website and/or purchasing products or services from us, you agree to be bound by these Terms and Conditions.
            We reserve the right to modify or update these Terms and Conditions at any time without notice. It is your responsibility to review these Terms and Conditions periodically to stay informed about any changes.
            Please read these Terms and Conditions carefully before using our website or purchasing products or services from us. If you have any questions or concerns, please contact us.<br/>
            Thank you for choosing Panda, and we hope you have a great shopping experience with us.
          </p>
          <div className="flex flex-col gap-10">
            <DescriptionItem title="Use of Website" description="You may use our website for lawful purposes only and in accordance with these terms and conditions. You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website." />
            <DescriptionItem title="Intellectual Property" description="The content on this website, including but not limited to, text, graphics, logos, images, audio clips, digital downloads, and software, is our property or the property of our content suppliers and is protected by copyright laws. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the website or its content without express written permission from us." />
            <DescriptionItem title="Products and Services" description="We offer a variety of products and services for purchase through our website. All descriptions, images, pricing, and availability of products and services are subject to change at any time without notice." />
            <DescriptionItem title="Payment and Shipping" description="We accept payment through various methods, which are described on our website. Shipping and delivery times may vary depending on the shipping method and destination. We are not responsible for any delays or damage that occur during shipping." />
            <DescriptionItem title="Returns and Refunds" description="We have a return and refund policy, which is described on our website. By purchasing products or services through our website, you agree to the terms of our return and refund policy." />
            <DescriptionItem title="User Content" description="Users may submit content, such as reviews or comments, to our website. By submitting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, publish, and distribute the content. You agree not to submit any content that is illegal, obscene, threatening, defamatory, or infringing on any intellectual property rights." />
            <DescriptionItem title="Limitation of Liability" description="To the fullest extent permitted by law, we shall not be liable for any damages arising out of or in connection with the use or inability to use our website or products, including but not limited to, direct, indirect, incidental, consequential, or punitive damages." />
            <DescriptionItem title="Governing Law" description="These terms and conditions shall be governed by and construed in accordance with the laws of USA, and any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of USA." />
          </div>
        </div>
      </div>
      </MainLayout>
    </>
  )
}

export default TermsAndConditionsPage