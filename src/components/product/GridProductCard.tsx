import { ProductCard } from "./ProductCard";
import { FC } from "react";

import { Product } from "~/interfaces";

interface Props {
  length: number;
  data?: Product[];
}

export const GridProductCard: FC<Props> = ({ length, data }) => {
  return (
    <div className="grid px-4 lg:grid-cols-4 lg:gap-8">
      {data?.map((product, i) => (
        <ProductCard product={product} key={`${product.id} - ${i} - ${product.title}`} />
      ))}
    </div>
  );
};
