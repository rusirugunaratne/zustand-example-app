import { Grid2, Typography } from "@mui/material";
import { useCartStore } from "../stores/cartStoreWithDevTools";

const styles = {
  padding: 2,
  margin: 2,
  color: "black",
  bgcolor: "white",
  borderRadius: "5px",
  width: "100%",
};

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <Grid2 container spacing={2} padding={2}>
      {cartItems.map((item) => (
        <Grid2 size={3} key={item.id}>
          <Typography sx={styles} variant='h6'>
            {item.name}
          </Typography>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Cart;
