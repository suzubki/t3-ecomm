import axios from "axios";
import { GridProductCard, DetailedProduct, MainLayout } from "~/components";

import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import type { Product } from "~/interfaces";
import Head from "next/head";

const Post = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { product, similarProducts, mostSelledProducts } = props;
  // const {  } = useContext(CartContext)

  return (
    <>
      <Head>
        <title>{`Panda - ${product.title}`}</title>
      </Head>
      <MainLayout>
        <DetailedProduct product={product} />
        {/* Productos similares */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-dark-primary">
            Productos similares
          </h2>
          <div className="mt-6">
            <GridProductCard data={similarProducts} />
          </div>
        </div>
        {/* Productos más vendidos */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-dark-primary">
            Productos más vendidos
          </h2>
          <div className="mt-6">
            <GridProductCard data={mostSelledProducts} />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await axios("https://fakestoreapi.com/products");
  const products = await res.data as Product[];

  return {
    paths: products.map((el) => ({ params: { product: el.id.toString() } })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const res = await axios(
    `https://fakestoreapi.com/products/${ctx.params?.product as string}`
  );
  const product = res.data as Product;

  if (!product) {
    return {
      notFound: true,
    };
  }

  const responseSimilarProducts = await axios(
    `https://fakestoreapi.com/products/category/${product.category}?limit=4`
  );
  const similarProducts = responseSimilarProducts.data as Product[];

  const responseMostSelledProducts = await axios(
    `https://fakestoreapi.com/products?limit=4&sort=desc`
  );
  const mostSelledProducts = responseMostSelledProducts.data as Product[];

  return {
    props: {
      product,
      similarProducts,
      mostSelledProducts,
    },
  };
};

export default Post;
