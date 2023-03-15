import { GridProductCard } from "~/components";
import { MainLayout } from "~/components/layout";
import type { Product } from "~/interfaces";

const TestPage = ({ products }: { products: Product[] }) => {
  return (
    <MainLayout>
      <GridProductCard data={products} />
    </MainLayout>
  );
};

export default TestPage;

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
