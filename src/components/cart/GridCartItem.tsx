import { FC } from "react"
import { CartProduct } from "~/interfaces"
import { CartItem } from "./"

interface Props{
  items: CartProduct[]
}

export const GridCartItem: FC<Props> = ({ items }) => {
  return (
    <div className="flex flex-col">
      {
        items.map((item)=> (
          <CartItem item={item} key={`${item.id} - ${item.name}`} />
        ))
      }
    </div>
  )
}