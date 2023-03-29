import { CartItem } from "./"
import type { CartProduct } from "~/interfaces"

interface Props{
  items: CartProduct[]
}

export const GridCartItem: React.FC<Props> = ({ items }) => {
  return (
    <div className={`flex-1 sm:max-h-none sm:h-[calc(100vh-4.5rem-12rem)] overflow-auto flex flex-col divide-y-2`}>
      {
        items.map((item)=> (
          <CartItem item={item} key={`${item.id} - ${item.name} - ${item.size} - ${item.quantity}`} />
        ))
      }
    </div>
  )
}