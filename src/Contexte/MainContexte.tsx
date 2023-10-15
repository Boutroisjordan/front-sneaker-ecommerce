// MainContext.js
import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import jsonFile from "../data/data.json";
import { Sneaker } from "../Types/Sneaker";

export type MainContextType = {
  jsonData: JSON | undefined;
  cart: { sneaker: Sneaker; quantity: number }[];
  addToCart: (item: { sneaker: Sneaker; quantity?: number }) => void;
  removeFromCart: (itemId: number) => void;
};
export type ICart = {
  sneaker: Sneaker;
  quantity?: number;
};

export const MainContexte = createContext<MainContextType | null>(null);

type Props = {
  children: ReactNode;
};

export const MainContextProvider = ({ children }: Props) => {
  const [jsonData, setJsonData] = useState<JSON>(jsonFile.sneakers);

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const addToCart = (item: { sneaker: Sneaker; quantity?: number }) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.sneaker.id === item.sneaker.id
    );

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.sneaker.id === item.sneaker.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + (item.quantity || 1),
              }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...item, quantity: item.quantity || 1 },
      ]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.sneaker.id === itemId
            ? {
                ...cartItem,
                quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 0,
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  useEffect(() => {
    // Récupère le panier depuis le localStorage lors du chargement de la page
    const storedCart = localStorage.getItem("cart");
    console.log("stored demarage: ", storedCart);
    if (storedCart) {
      console.log("stored demarage2: ", JSON.parse(storedCart));
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("hey log what inside : ", cart);
  }, [cart]);

  return (
    <MainContexte.Provider
      value={{
        jsonData,
        cart,
        removeFromCart,
        addToCart,
      }}
    >
      {children}
    </MainContexte.Provider>
  );
};
