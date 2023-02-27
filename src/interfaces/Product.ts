export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface CartProduct {
  //TODO: Addapt this interface to the CartItem interface
  id: number,
  name: string,
  price: number,
  quantity: number,
  size: string,
  color: string,
  src: string,
}
