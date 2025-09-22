import type { CartItem } from "../types.ts";

interface Props {
  cartItem: CartItem;
  setCartItems: (newCartItems: CartItem[]) => void;
  onAddCartItem: (cartItem: CartItem) => void;
  onRemoveCartItem: (cartItem: CartItem) => void;
  onDecrementQuantity: (cartItem: CartItem) => void;
}

const CartItemCard = ({
  cartItem,
  setCartItems,
  onAddCartItem,
  onRemoveCartItem,
  onDecrementQuantity,
}: Props) => {
  return (
    <div className="cart-item-card d-flex align-items-center gap-3 p-2 border-bottom">
      <img
        src={cartItem.product.image}
        alt={cartItem.product.name}
        className="cart-item-img rounded"
      />

      <div className="flex-grow-1">
        <h6 className="mb-1">{cartItem.product.name}</h6>
        <span className="text-muted">
          ${cartItem.product.price} each |{" "}
          <strong>${cartItem.product.price * cartItem.quantity}</strong>
        </span>
      </div>

      <div className="text-center">
        <span className="fw-bold">x{cartItem.quantity}</span>
      </div>

      <button
        className="btn btn-sm btn-outline-primary p-2"
        onClick={() => {
          onAddCartItem(cartItem);
        }}
      >
        <i className="bi bi-plus"></i>
      </button>

      <button
        className="btn btn-sm btn-outline-secondary p-2"
        onClick={() => {
          onDecrementQuantity(cartItem);
        }}
      >
        <i className="bi bi-dash"></i>
      </button>

      <button
        className="btn btn-sm btn-outline-danger p-2"
        onClick={() => {
          onRemoveCartItem(cartItem);
        }}
      >
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
};

export default CartItemCard;
