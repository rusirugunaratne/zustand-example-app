import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Item } from "../data/items";

interface CartStore {
  cartItems: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],
      addItem: (item: Item) =>
        set((state) => ({ cartItems: [...state.cartItems, item] })),
      removeItem: (id: number) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "cart-storage", // Key for localStorage
    }
  )
);
