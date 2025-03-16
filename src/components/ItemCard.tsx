import { Card as MuiCard, CardMedia, CardActions, Button } from "@mui/material";
import { Item } from "../data/items";

type ItemCardProps = {
  item: Item;
  onItemAdd: () => void;
  onItemRemove: () => void;
};

const ItemCard = ({ item, onItemAdd, onItemRemove }: ItemCardProps) => {
  return (
    <MuiCard>
      <CardMedia sx={{ height: 140 }} image={item.image} title={item.name} />
      <CardActions>
        <Button onClick={onItemAdd}>Add</Button>
        <Button onClick={onItemRemove}>Remove</Button>
      </CardActions>
    </MuiCard>
  );
};

export default ItemCard;
