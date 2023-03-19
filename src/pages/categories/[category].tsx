import Head from "next/head"
import axios from "axios"
import { GridProductCard, MainLayout } from "~/components"
import { capitalizeFirstLetter, slugifyText } from "~/utils"

import type { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import type { Category, Product } from "~/interfaces"
import { PathReader } from "~/components/customs"

const CategoryPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { products, categoryName } = props

  return (
    <>
      <Head>
        <title>{`Panda - ${capitalizeFirstLetter(categoryName)} category`}</title>
      </Head>
      <MainLayout>
          {/* Sidebar of other categories and the selected is bolder */}
          <div className="mx-10 xl:mx-0 flex flex-col items-center">
            <PathReader />
            <div className="flex flex-col items-center mt-12">
              <h1 className="text-2xl font-semibold text-dark-primary">{capitalizeFirstLetter(categoryName)}</h1>
              <span className="text-gray-500 font-medium text-sm">({products.length} products)</span>
            </div>
            
            {/* Products */}
            <GridProductCard data={products} />
          </div>
      </MainLayout>
    </>
  )
}

export default CategoryPage

export const getStaticPaths = async () => {
  const res = await axios("https://fakestoreapi.com/products/categories")
  const categories = await res.data as Category[]

  return {
    paths: categories.map((category) => ({
      params: {
        category: slugifyText(category),
      }
    })),
    fallback: false
  }
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  let category = ctx.params?.category;
  if(typeof category !== "string") return { notFound: true }
  if(category.startsWith("men")){
    category = "men's clothing"
  }
  if(category.startsWith("women")){
    category = "women's clothing"
  }

  const res = await axios(`https://fakestoreapi.com/products/category/${category}`)
  const productsInCategory = await res.data as Product[]

  return {
    props: {
      products: productsInCategory,
      categoryName: category,
    },
  }
}