import { Grid2, Paper, Typography } from "@mui/material";
import { items } from "../data/items";

const Cart = () => {
  return (
    <Grid2 container spacing={2} padding={2}>
      {items.map((item) => (
        <Grid2 size={4} key={item.id}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant='h6'>{item.name}</Typography>
          </Paper>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Cart;
