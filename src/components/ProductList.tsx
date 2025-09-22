import type { Product, CartItem } from '../types'
import ProductCard from "./ProductCard.tsx";

interface Props {
  products: Product[];
  onAddCartItem: (cartItem: CartItem) => void;
}

const ProductList = ({ products, onAddCartItem }: Props) => {
  const productCards = products.map((product) => {
    return <ProductCard product={product} key={product.id} onAddCartItem={onAddCartItem} />;
  });

  return <div id="product-list" className="flex-grow-1 d-flex justify-content-start flex-wrap gap-2">
    {productCards}
  </div>;
};

export default ProductList;
