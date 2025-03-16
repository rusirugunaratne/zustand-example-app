import { useCartStore } from "../stores/cartStore";

export const printItems = (): void => {
  const cartItems = useCartStore.getState().cartItems;
  console.log("Current items:", cartItems);
};
