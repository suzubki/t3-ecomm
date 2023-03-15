import Link from "next/link"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import axios from "axios"

import { GridProductCard, MainLayout } from "~/components"
import { Category, Product } from "~/interfaces"
import { slugifyText } from "~/utils"

const CategoryPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { products, categoryName } = props

  return (
    <MainLayout>
        {/* Sidebar of other categories and the selected is bolder */}
        <div className="flex divide-x-2">
          <div className="flex flex-col h-full mr-2">
              <h2 className="text-2xl font-semibold text-dark-primary">Categorías</h2>
              {/* Tabla de categorías */}
              <div className="mt-4 w-full flex flex-col gap-1">
                {
                  ["Men's clothing", "Women's clothing", "Electronics", "Jewelery"].map((category) => (
                    <Link href="/categories/mens-clothing" className={`block ${categoryName === category.toLowerCase() ? "bg-gray-200 font-semibold text-dark-primary" : "bg-transparent text-gray-500 font-medium"} px-3 tracking-[-1px] py-2 w-64 rounded-md transition-all duration-200 hover:bg-gray-200 hover:font-semibold hover:text-dark-primary`}>{category}</Link>
                  ))
                }
              </div>
          </div>
          
          <GridProductCard data={products} />
        </div>
    </MainLayout>
  )
}

export default CategoryPage

export const getStaticPaths = async () => {
  const res = await axios("https://fakestoreapi.com/products/categories")
  const categories: Category[] = await res.data

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
  const productsInCategory: Product[] = await res.data

  return {
    props: {
      products: productsInCategory,
      categoryName: category,
    },
  }
}