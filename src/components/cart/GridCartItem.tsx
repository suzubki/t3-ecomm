import { FC } from "react"
import { CartProduct } from "~/interfaces"
import { CartItem } from "./"

interface Props{
  items: CartProduct[]
}

export const GridCartItem: FC<Props> = ({ items }) => {
  return (
    <div className="h-[calc(100vh-4.5rem-12rem)] overflow-auto flex flex-col divide-y-2">
      {
        items.map((item)=> (
          <CartItem item={item} key={`${item.id} - ${item.name} - ${item.size} - ${item.quantity}`} />
        ))
      }
    </div>
  )
}