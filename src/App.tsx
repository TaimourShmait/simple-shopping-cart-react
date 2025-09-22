import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart.tsx";
import type { Product, CartItem } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    category: "smartphones",
    description:
      "Latest iPhone with titanium design and advanced camera system",
  },
  {
    id: 2,
    name: "MacBook Air M3",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    category: "laptops",
    description: "Ultra-thin laptop with M3 chip and all-day battery life",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400",
    category: "audio",
    description: "Premium wireless earbuds with active noise cancellation",
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    price: 1099,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    category: "tablets",
    description: "Professional tablet with M2 chip and Liquid Retina display",
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    price: 399,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    category: "audio",
    description: "Industry-leading noise canceling headphones",
  },
  {
    id: 6,
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    category: "smartphones",
    description: "Premium Android phone with S Pen and advanced photography",
  },
  {
    id: 7,
    name: "Dell XPS 13",
    price: 999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    category: "laptops",
    description: "Compact laptop with stunning InfinityEdge display",
  },
  {
    id: 8,
    name: "Apple Watch Series 9",
    price: 429,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400",
    category: "wearables",
    description:
      "Advanced smartwatch with health monitoring and fitness tracking",
  },
  {
    id: 9,
    name: "Nintendo Switch OLED",
    price: 349,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "gaming",
    description: "Portable gaming console with vibrant OLED screen",
  },
  {
    id: 10,
    name: "Logitech MX Master 3S",
    price: 99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    category: "accessories",
    description: "Premium wireless mouse with ultra-fast scrolling",
  },
  {
    id: 11,
    name: 'Samsung 49" Odyssey G9',
    price: 1399,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    category: "monitors",
    description: "Ultra-wide curved gaming monitor with 240Hz refresh rate",
  },
  {
    id: 12,
    name: "Google Pixel 8 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
    category: "smartphones",
    description: "AI-powered smartphone with exceptional camera capabilities",
  },
];

const App = () => {
  const [showCartInterface, setShowCartInterface] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addCartItem = (cartItem: CartItem) => {
    console.log(cartItem.product.name + " has entered the function");

    setCartItems((prevCartItems) => {
      const foundItem = prevCartItems.find(
        (item) => item.product.id === cartItem.product.id
      );

      if (foundItem) {
        console.log(foundItem.product.name + " has been found!");
        return prevCartItems.map((item) =>
          item.product.id === cartItem.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, cartItem];
      }
    });
  };

  const decrementQuantity = (cartItem: CartItem) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === cartItem.product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveCartItem = (cartItem: CartItem) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== cartItem.product.id)
    );
  };

  const getTotalQuantity = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.quantity;
    }
    return total;
  };

  const getTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.product.price * item.quantity;
    }
    return total;
  };

  return (
    <>
      <Header
        showStatus={showCartInterface}
        onSetShowCartInterface={setShowCartInterface}
        cartLength={getTotalQuantity()}
      />

      <main className="flex-grow-1 w-100 d-flex flex-column p-1">
        {showCartInterface ? (
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            onAddCartItem={addCartItem}
            onRemoveCartItem={handleRemoveCartItem}
            onDecrementQuantity={decrementQuantity}
            cartLength={getTotalQuantity()}
            totalPrice={getTotalPrice()}
          />
        ) : (
          <ProductList products={products} onAddCartItem={addCartItem} />
        )}
      </main>

      <footer className="w-100 d-flex justify-content-between align-items-center p-2">
        <p>Taimour Shmait</p>
        <p>React Practice - September 2025</p>
      </footer>
    </>
  );
};

export default App;
