import { ProductCard } from "./ProductCard";
import type { Product } from "~/interfaces";

interface Props {
  data?: Product[];
}

export const GridProductCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex-1 flex flex-wrap justify-center px-4 gap-6 lg:gap-4">
      {data?.map((product, i) => (
        <ProductCard product={product} key={`${product.id} - ${i} - ${product.title}`} />
      ))}
    </div>
  );
};
