import Head from "next/head";

import { GridProductCard, Slider } from "~/components";
import { MainLayout } from "~/components/layout";

import type { Product } from "~/interfaces";

const images = [
  "/images/slider/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg",
  "/images/slider/ian-schneider-TamMbr4okv4-unsplash.jpg",
]

const HomePage = ({ products }: { products: Product[] }) => {
  return (
    <>
      <Head>
        <title>Panda</title>
      </Head>
      <MainLayout banner={
        <Slider images={images} />
      }>
        <div className="mx-16 lg:mx-20">
          <h1 className="mb-12 font-merriweather uppercase text-4xl font-medium text-center">New Arrivals</h1>
          <GridProductCard data={products} />
        </div>
      </MainLayout>
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=8");
  const products = await res.json() as Product[];

  return {
    props: {
      products: products,
      // Revalidación cada día
      revalidate: 60 * 60 * 24,
    },
  };
};
