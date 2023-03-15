import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

import type { Product } from "~/interfaces";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link href={`/productos/${product.id}`} className="relative block w-full min-w-[16rem] max-w-[18rem]">
      <div className="flex h-full flex-col rounded-md pb-2 shadow-sm transition-all duration-300 ease-in hover:shadow-md">
        {/* Contenedor de la imagen */}
        <div className="relative flex h-64 items-center">
          <div className="absolute top-8 right-4 z-50 flex flex-col items-center gap-1">
            <AiOutlineHeart className="h-7 w-auto rounded-full p-1 text-gray-600 transition-all duration-200 ease-in hover:bg-red-500 hover:text-light-primary" />
          </div>
          <Image
            alt={product.description}
            src={`${product.image}`}
            className="object-contain p-12"
            fill
            sizes="(min-width: 60em) 10vw,
                    (min-width: 28em) 10vw,
                    10vw"
          />
        </div>
        {/* Información del producto */}
        <div className="mt-1 flex flex-1 flex-col justify-between gap-3 py-2 px-4">
          {/* Nombre del producto */}
          <h3 className="text-center text-base font-semibold leading-5 tracking-[-0.5px]">
            {product.title}
          </h3>
          {/* Precio y Agregar */}
          {/* Precio */}
          <div className="flex items-end justify-center gap-2">
            <span className="text-xs text-gray-500 line-through">
              $ {(product.price + 10).toFixed(2)}
            </span>
            <h4 className="text-sm font-semibold">
              $ {product.price.toFixed(2)}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};
