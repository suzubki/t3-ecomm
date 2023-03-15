import Image from "next/image";
import { useContext, useState } from "react";
import { AiFillInfoCircle, AiFillHeart, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext, UIContext } from "~/context";
import { capitalizeFirstLetter } from "~/utils";
import type { Product } from "~/interfaces";

interface Props {
  product: Product;
}

export const DetailedProduct: React.FC<Props> = ({ product }: { product: Product }) => {
  const [mainImage, setMainImage] = useState(product.image);
  const handleMainImage = (src: string) => {
    setMainImage(src);
  };
  // Información del producto seleccionado, talla y Quantity
  const [selectedProduct, setSelectedProduct] = useState({
    size: null as string | null,
    quantity: 1,
  })
  const [showErrorForSelectedSize, setShowErrorForSelectedSize] = useState(false)
  const handleProductSize = (name: keyof typeof selectedProduct, value: string | number) => {
    if(showErrorForSelectedSize || selectedProduct.size !== null ) setShowErrorForSelectedSize(false)
    if(selectedProduct.size === value){
      setSelectedProduct({
        ...selectedProduct,
        size: null
      })
      return
    }
    setSelectedProduct({
      ...selectedProduct,
      [name]: value
    })
  }
  const handleProductAmount = (name: keyof typeof selectedProduct, value: number) => {
    if(selectedProduct.quantity + value < 1) return
    if(selectedProduct.quantity > 9 && value === 1) return
    setSelectedProduct({
      ...selectedProduct,
      [name]: selectedProduct.quantity + value
    })
  }
  // Agregar producto al carrito
  const { addProduct } = useContext(CartContext)
  const { toggleSidebar } = useContext(UIContext)
  const handleAddProductToCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!selectedProduct.size) {
      setShowErrorForSelectedSize(true)
      return
    }
    addProduct({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: selectedProduct.quantity,
      size: selectedProduct.size,
      src: mainImage
    })
    toggleSidebar()
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleAddProductToCart}>
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
      <div className="flex gap-10 border-b-2 border-solid border-b-gray-300 pb-10">
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
          {/* Product name */}
          <div className="flex w-full flex-col gap-2 border-b-2 border-solid border-b-gray-300 py-5">
            {/* Código del producto */}
            <h4 className="text-xs text-gray-400">Code: {product.id}</h4>
            <h1 className="text-4xl font-medium text-dark-primary">
              {product.title}
            </h1>
            <p className="text-xs font-medium text-gray-400">
              Availability:
              <span className="text-sm font-semibold text-dark-primary">
                {" "}
                In Stock
              </span>
            </p>
          </div>
          {/* Price */}
          <div className="flex w-full flex-col border-b-2 border-solid border-b-gray-300 py-5">
            <h4 className="text-xs font-medium text-gray-400">Price: </h4>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-medium tracking-[-1px]">
                $ {product.price}
              </h3>
              <h3 className="relative top-[1px] text-sm tracking-[-1px] text-gray-500 line-through">
                $ {(product.price + 10).toFixed(2)}
              </h3>
            </div>
          </div>
          {/* Contenedor Quantity, Size */}
          <div className="divide flex w-full divide-x-2 py-5">
            {/* Quantity */}
            <div className="flex flex-col gap-2 pr-6">
              <h4 className="text-xs font-medium text-gray-400">Quantity: </h4>
              {/* Buttons */}
              <div className="flex items-center">
                <AiOutlineMinus onClick={() => handleProductAmount('quantity', -1)} className="h-6 w-6 cursor-pointer text-dark-primary border-slate-300 border-solid border-[1px] p-1 hover:bg-slate-200" />
                <div className="flex h-8 w-8 items-center font-medium justify-center text-dark-primary">
                  {selectedProduct.quantity}
                </div>
                <AiOutlinePlus onClick={() => handleProductAmount('quantity', +1)} className="h-6 w-6 cursor-pointer text-dark-primary border-slate-300 border-solid border-[1px] p-1 hover:bg-slate-200" />
              </div>
            </div>
            {/* Size */}
            <div className="relative flex flex-col gap-2 px-6">
              <h4 className="text-xs font-medium text-gray-400">Size: </h4>
              {/* Buttons */}
              <div className="flex gap-2 text-xs">
                {
                  ["S", "M", "L", "XL"].map((size, i) => (
                    <button 
                      key={`${size} - ${i}`}
                      className={`flex h-8 w-8 items-center justify-center border-2 border-solid border-gray-300 rounded-full transition-all duration-200 ease-out ${selectedProduct.size === size ? "bg-dark-primary text-white" : "bg-white text-dark-primary"}`} 
                      onClick={() => handleProductSize("size", size)} 
                      type="button"
                    >
                      {size}
                    </button>
                  ))
                }
              </div>
              {/* Error */}
              {
                showErrorForSelectedSize && (
                  <div className="absolute -bottom-6">
                    <div className="relative top-2 flex w-max flex-col bg-sky-500 text-white">
                      <div className="absolute -top-1 bg-sky-500 left-2 z-0 h-0 w-0 border-b-8 border-r-8 border-transparent transform rotate-45" />
                      <div className="p-1 flex gap-1 z-10">
                        <AiFillInfoCircle />
                        <span className="text-xs font-medium">You must select an option</span>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          {/* Agregar al carrito */}
          <div className="flex w-full flex-col gap-2 py-5">
            {/* Buttons de agregar producto o agregar a favoritos */}
            <div className="flex gap-2">
              <button 
                className="flex items-center justify-center rounded-md border-[1px] border-solid border-dark-primary bg-dark-primary py-2 px-4 text-sm font-medium text-light-primary transition-all duration-300 ease-in hover:bg-white hover:text-dark-primary" 
                type="submit"
              >
                Add to cart
              </button>
              <button 
                className="hover: flex items-center justify-center rounded-md py-1 px-2 text-xl text-dark-primary transition-all duration-300 ease-out hover:scale-110 hover:text-red-500"
                type="button"
              >
                <AiFillHeart
                  className="h-6 w-6 stroke-current"
                  fill="currentColor"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Description and Details */}
      <div className="flex gap-10 border-b-2 border-solid border-b-gray-300 pt-4 pb-8">
        {/* Details */}
        <div className="flex flex-[1] flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-primary">Details</h3>
          <p className="text-sm">
            <span className="text-gray-500">- Still in stock:</span>{" "}
            <span className="font-medium">{product.rating.count}</span>
          </p>
          <p className="text-sm">
            <span className="text-gray-500">- Category:</span>{" "}
            <span className="font-medium underline">{product.category}</span>
          </p>
          <p className="flex items-center gap-1 text-sm">
            <span className="text-gray-500">- Rating:</span>{" "}
            <AiOutlineStar className="h-5 w-auto fill-yellow-400 stroke-2" />{" "}
            <span className="font-medium">{product.rating.rate}</span>
          </p>
        </div>
        {/* Description */}
        <div className="flex flex-[3] flex-col gap-4">
          <h3 className="text-xl font-semibold text-dark-primary">
            Description
          </h3>
          <p className="text-sm text-gray-400">{capitalizeFirstLetter(product.description)}</p>
        </div>
      </div>
    </form>
  )
}