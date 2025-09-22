import CartItemCard from "./CartItemCard.tsx";
import type { CartItem } from "../types.ts";

interface Props {
  cartItems: CartItem[];
  setCartItems: (newCartItems: CartItem[]) => void;
  onAddCartItem: (cartItem: CartItem) => void;
  onRemoveCartItem: (cartItem: CartItem) => void;
  onDecrementQuantity: (cartItem: CartItem) => void;
  cartLength: number;
  totalPrice: number;
}

const Cart = ({
  cartItems,
  setCartItems,
  onAddCartItem,
  onRemoveCartItem,
  onDecrementQuantity,
  cartLength,
  totalPrice,
}: Props) => {
  const cartItemCards = cartItems.map((cartItem) => {
    return (
      <CartItemCard
        cartItem={cartItem}
        setCartItems={setCartItems}
        onAddCartItem={onAddCartItem}
        onRemoveCartItem={onRemoveCartItem}
        onDecrementQuantity={onDecrementQuantity}
      />
    );
  });

  return (
    <div id="cart-interface" className="flex-grow-1 d-flex flex-column gap-1">
      <h3>Your cart has {cartLength} item(s)!</h3>
      <div
        id="cart-item-cards"
        className="flex-grow-1 d-flex flex-column gap-1"
      >
        {cartItemCards}
      </div>

      {cartLength > 0 && (
        <div id="cart-summary" className="p-3 bg-success text-white">
          <h3>Total - ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
