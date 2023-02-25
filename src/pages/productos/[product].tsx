import Image from "next/image";
import { useState } from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import axios from "axios";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineStar,
} from "react-icons/ai";

import { Product } from "~/interfaces";
import { GridProductCard, MainLayout } from "~/components";

const Post = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { product, similarProducts, mostSelledProducts } = props;
  const [mainImage, setMainImage] = useState(product.image);
  const handleMainImage = (src: string) => {
    setMainImage(src);
  };

  

  return (
    <MainLayout>
      {/* Ruta del producto */}
      <div className="flex items-end gap-1 text-xs text-dark-primary">
        {/* Agregar un Link a cada uno de estos elementos */}
        <span className="underline-gray-400 cursor-pointer font-medium underline">
          Inicio{" "}
        </span>
        <span>/</span>
        <span className="underline-gray-400 cursor-pointer font-medium underline">
          Productos
        </span>
        <span>/</span>
        <span className="text-gray-400">{product.title}</span>
      </div>
      {/* Imagenes y Agregar Producto */}
      <div className="mt-4 flex gap-10 border-b-2 border-solid border-b-gray-300 pb-10">
        {/* Contenedor de imagenes */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Imagen principal */}
          <div className="relative h-96 overflow-hidden bg-white shadow-sm">
            <Image
              alt={product.description}
              src={mainImage}
              className="object-contain p-12 transition-all duration-300 ease-in hover:scale-110"
              fill
              sizes="(min-width: 60em) 10vw,
                      (min-width: 28em) 10vw,
                      10vw"
            />
          </div>
          {/* Grid de imágenes */}
          <div className="flex justify-center gap-4">
            <div
              onClick={() => handleMainImage(product.image)}
              className="relative cursor-pointer"
            >
              <Image
                className="h-20 w-20 object-contain"
                alt="Imagen del producto"
                width={120}
                height={120}
                src={product.image}
              />
              {mainImage === product.image && (
                <div className="absolute bottom-0 h-1 w-full bg-black" />
              )}
            </div>
            <div
              onClick={() =>
                handleMainImage(
                  "/images/product_3/175322072_480031280085338_3155938935071932734_n.jpg"
                )
              }
              className="relative cursor-pointer"
            >
              <Image
                className="h-20 w-20 object-cover"
                alt="Imagen del producto"
                width={120}
                height={120}
                src="/images/product_3/175322072_480031280085338_3155938935071932734_n.jpg"
              />
              {mainImage ===
                "/images/product_3/175322072_480031280085338_3155938935071932734_n.jpg" && (
                <div className="absolute bottom-0 h-1 w-full bg-black" />
              )}
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() =>
                handleMainImage(
                  "/images/product_3/175582706_285595589694768_194376927765438295_n.jpg"
                )
              }
            >
              <Image
                className="h-20 w-20 object-cover"
                alt="Imagen del producto"
                width={120}
                height={120}
                src="/images/product_3/175582706_285595589694768_194376927765438295_n.jpg"
              />
              {mainImage ===
                "/images/product_3/175582706_285595589694768_194376927765438295_n.jpg" && (
                <div className="absolute bottom-0 h-1 w-full bg-black" />
              )}
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() =>
                handleMainImage(
                  "/images/product_3/175627983_3804729836248955_1998717010901029896_n.jpg"
                )
              }
            >
              <Image
                className="h-20 w-20 object-cover"
                alt="Imagen del producto"
                width={120}
                height={120}
                src="/images/product_3/175627983_3804729836248955_1998717010901029896_n.jpg"
              />
              {mainImage ===
                "/images/product_3/175627983_3804729836248955_1998717010901029896_n.jpg" && (
                <div className="absolute bottom-0 h-1 w-full bg-black" />
              )}
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() =>
                handleMainImage(
                  "/images/product_3/175805214_1117286112087769_2439161088851825784_n.jpg"
                )
              }
            >
              <Image
                className="h-20 w-20 object-cover"
                alt="Imagen del producto"
                width={120}
                height={120}
                src="/images/product_3/175805214_1117286112087769_2439161088851825784_n.jpg"
              />
              {mainImage ===
                "/images/product_3/175805214_1117286112087769_2439161088851825784_n.jpg" && (
                <div className="absolute bottom-0 h-1 w-full bg-black" />
              )}
            </div>
          </div>
        </div>
        {/* Información de la imagen */}
        <div className="flex flex-1 flex-col">
          {/* Nombre del producto */}
          <div className="flex w-full flex-col gap-2 border-b-2 border-solid border-b-gray-300 py-5">
            {/* Código del producto */}
            <h4 className="text-xs text-gray-400">Código: {product.id}</h4>
            <h1 className="text-4xl font-medium text-dark-primary">
              {product.title}
            </h1>
            <p className="text-xs font-medium text-gray-400">
              Disponibilidad:
              <span className="text-sm font-semibold text-dark-primary">
                {" "}
                En Stock
              </span>
            </p>
          </div>
          {/* Precio */}
          <div className="flex w-full flex-col border-b-2 border-solid border-b-gray-300 py-5">
            <h4 className="text-xs font-medium text-gray-400">Precio: </h4>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-medium tracking-[-1px]">
                S/.{product.price}
              </h3>
              <h3 className="relative top-[1px] text-sm tracking-[-1px] text-gray-500 line-through">
                S/.{(product.price + 50).toFixed(2)}
              </h3>
            </div>
          </div>
          {/* Contenedor Cantidad, Tamaño y Color */}
          <div className="divide flex w-full divide-x-2 py-5">
            {/* Cantidad */}
            <div className="flex flex-col gap-2 pr-6">
              <h4 className="text-xs font-medium text-gray-400">Cantidad: </h4>
              {/* Botones */}
              <div className="flex items-center gap-2">
                <AiOutlineMinusCircle className="h-8 w-8 cursor-pointer rounded-full bg-dark-primary stroke-2 text-white" />
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-solid border-gray-300 bg-white text-dark-primary">
                  1
                </div>
                <AiOutlinePlusCircle className="h-8 w-8 cursor-pointer rounded-full bg-dark-primary stroke-2 text-white" />
              </div>
            </div>
            {/* Tamaño */}
            <div className="flex flex-col gap-2 px-6">
              <h4 className="text-xs font-medium text-gray-400">Tamaño: </h4>
              {/* Botones */}
              <div className="flex gap-2 text-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-primary text-white">
                  S
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-solid border-gray-300 bg-white text-dark-primary">
                  M
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-primary text-white">
                  L
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-solid border-gray-300 bg-white text-dark-primary">
                  XL
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-primary text-white">
                  XXL
                </div>
              </div>
            </div>
            {/* Color */}
            <div className="flex flex-col gap-2 px-6">
              <h4 className="text-xs font-medium text-gray-400">Color: </h4>
              {/* Botones */}
              <div className="flex gap-2 text-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-primary text-white">
                  1
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-solid border-gray-300 bg-white text-dark-primary">
                  2
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-primary text-white">
                  3
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-solid border-gray-300 bg-white text-dark-primary">
                  4
                </div>
              </div>
            </div>
          </div>
          {/* Agregar al carrito */}
          <div className="flex w-full flex-col gap-2 py-5">
            {/* Botones de agregar producto o agregar a favoritos */}
            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded-md border-[1px] border-solid border-dark-primary bg-dark-primary py-2 px-4 text-sm font-medium text-light-primary transition-all duration-300 ease-in hover:bg-white hover:text-dark-primary">
                Agregar al carrito
              </button>
              <button className="hover: flex items-center justify-center rounded-md py-1 px-2 text-xl text-dark-primary transition-all duration-300 ease-out hover:scale-110 hover:text-red-500">
                <AiFillHeart
                  className="h-6 w-6 stroke-current"
                  fill="currentColor"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Descripción y Detalles */}
      <div className="flex gap-10 border-b-2 border-solid border-b-gray-300 py-6">
        {/* Detalles */}
        <div className="flex flex-[1] flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-primary">Detalles</h3>
          <p className="text-sm">
            <span className="text-gray-500">- Productos en stock:</span>{" "}
            <span className="font-medium">{product.rating.count}</span>
          </p>
          <p className="text-sm">
            <span className="text-gray-500">- Categoría:</span>{" "}
            <span className="font-medium underline">{product.category}</span>
          </p>
          <p className="flex items-center gap-1 text-sm">
            <span className="text-gray-500">- Rating:</span>{" "}
            <AiOutlineStar className="h-5 w-auto fill-yellow-400 stroke-2" />{" "}
            <span className="font-medium">{product.rating.rate}</span>
          </p>
        </div>
        {/* Descripción */}
        <div className="flex flex-[3] flex-col gap-4">
          <h3 className="text-xl font-semibold text-dark-primary">
            Descripción
          </h3>
          <p className="text-sm text-gray-400">{product.description}</p>
        </div>
      </div>
      {/* Productos similares */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-dark-primary">
          Productos similares
        </h2>
        <div className="mt-6">
          <GridProductCard data={similarProducts} length={0} />
        </div>
      </div>
      {/* Productos más vendidos */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-dark-primary">
          Productos más vendidos
        </h2>
        <div className="mt-6">
          <GridProductCard data={mostSelledProducts} length={0} />
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticPaths = async () => {
  const res = await axios("https://fakestoreapi.com/products?limit=8");
  const products = res.data as Product[];

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
