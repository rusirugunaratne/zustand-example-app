import { Grid2, Typography } from "@mui/material";
import { items } from "../data/items";

const Cart = () => {
  return (
    <Grid2 container spacing={2} padding={2}>
      {items.map((item) => (
        <Grid2 size={4} key={item.id}>
          <Typography sx={{ margin: 2 }} variant='h6'>
            {item.name}
          </Typography>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Cart;
