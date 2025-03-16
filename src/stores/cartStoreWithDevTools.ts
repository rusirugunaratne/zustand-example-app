import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Item } from "../data/items";

interface CartStore {
  cartItems: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
}

export const useCartStore = create<CartStore>()(
  devtools((set) => ({
    cartItems: [],
    addItem: (item) =>
      set(
        (state) => ({ cartItems: [...state.cartItems, item] }),
        false,
        "cart/addItem"
      ),
    removeItem: (id) =>
      set(
        (state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        }),
        false,
        "cart/removeItem"
      ),
  }))
);
