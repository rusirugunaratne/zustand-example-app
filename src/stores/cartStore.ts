import { create } from "zustand";
import { Item } from "../data/items";

interface CartStore {
  cartItems: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addItem: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
}));
