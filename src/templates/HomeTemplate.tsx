import { GetStaticProps } from "next";
import { FC } from "react";
import { GridProductCard } from "~/components";
import { Product } from "~/interfaces";
import { api } from "~/utils/api";

interface Props {
  products: Product[];
}

export const HomeTemplate: FC<Props> = ({ products }) => {
  return <GridProductCard length={0} data={products} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = api.products.getAll.useQuery();
  const products = res.data;

  return {
    props: {
      products: products,
    },
  };
};
