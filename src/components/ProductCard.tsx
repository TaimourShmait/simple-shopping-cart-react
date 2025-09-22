import type { Product, CartItem } from "../types";
interface Props {
  product: Product;
  onAddCartItem: (cartItem: CartItem) => void;
}

const ProductCard = ({ product, onAddCartItem }: Props) => {
  return (
    <div className="product-card border rounded d-flex flex-column justify-content-center align-items-center gap-1 p-1">
      <p>{product.name}</p>
      <img
        src={product.image}
        alt={"Product " + product.id}
        className="rounded"
      />
      <div className="d-flex flex-column align-items-center gap-2">
        <p>$ {product.price}</p>
        <button
          className="btn btn-outline-success d-flex align-items-center p-1 gap-2"
          onClick={() => onAddCartItem({ product, quantity: 1 })}
        >
          <i className="bi bi-cart-plus"></i>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
