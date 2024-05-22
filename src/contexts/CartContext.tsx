import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { createContext, useContext } from "react";

type cartItem = {
  productId: number;
  quantity: number;
};

type cartContext = {
  cartItems: cartItem[];
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext({} as cartContext);

type CartProviderProps = {
  children: React.ReactNode;
};

function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorageState<cartItem[]>(
    [],
    "cart",
  );

  function increaseItemQuantity(productId: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.productId === productId) == undefined) {
        return [...currItems, { productId, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemQuantity(productId: number) {
    setCartItems((currItems) => {
      if (
        currItems.find((item) => item.productId === productId)?.quantity === 1
      ) {
        return currItems.filter((item) => item.productId !== productId);
      } else {
        return currItems.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(productId: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.productId !== productId);
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("useCart must be used within a CartProvider");

  return context;
}

export { CartProvider, useCart, type cartItem };
