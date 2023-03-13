import { ProductCard } from "./ProductCard";
import { FC } from "react";

import { Product } from "~/interfaces";

interface Props {
  data?: Product[];
}

export const GridProductCard: FC<Props> = ({ data }) => {
  return (
    <div className="flex-1 flex flex-wrap justify-center px-4 lg:gap-8">
      {data?.map((product, i) => (
        <ProductCard product={product} key={`${product.id} - ${i} - ${product.title}`} />
      ))}
    </div>
  );
};
