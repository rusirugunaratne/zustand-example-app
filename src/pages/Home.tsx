import { Grid2, Typography } from "@mui/material";
import ItemCard from "../components/ItemCard";
import { Item, items } from "../data/items";
import { useCartStore } from "../stores/cartStoreWithDevTools";

const Home = () => {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);

  // or we can destructure the addItem and removeItem functions from the useCartStore hook
  //   const { addItem, removeItem } = useCartStore((state) => ({
  //     addItem: state.addItem,
  //     removeItem: state.removeItem,
  //   }));

  const onItemAdd = (item: Item) => {
    addItem(item);
  };

  const onItemRemove = (item: Item) => {
    removeItem(item.id);
  };

  return (
    <>
      <Typography variant='h3'>Items</Typography>
      <Grid2 container spacing={2}>
        {items.map((item) => (
          <Grid2 key={item.id} size={4}>
            <ItemCard
              onItemAdd={() => onItemAdd(item)}
              onItemRemove={() => onItemRemove(item)}
              item={item}
            />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default Home;
