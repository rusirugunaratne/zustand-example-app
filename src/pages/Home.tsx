import { Grid2, Typography } from "@mui/material";
import ItemCard from "../components/ItemCard";
import { Item, items } from "../data/items";

const Home = () => {
  const onItemAdd = (item: Item) => {
    console.log(item);
  };

  const onItemRemove = (item: Item) => {
    console.log(item);
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
