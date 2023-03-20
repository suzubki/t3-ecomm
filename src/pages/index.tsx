import Head from "next/head";

import { GridProductCard, Slider } from "~/components";
import { MainLayout } from "~/components/layout";

import type { Product } from "~/interfaces";

const HomePage = ({ products }: { products: Product[] }) => {
  return (
    <>
      <Head>
        <title>Panda</title>
      </Head>
      <MainLayout banner={
        <Slider />
      }>
      {/* Main container */}
        {/* Slider */}

        <div className="mx-16 lg:mx-20">
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
