export type Item = {
  id: number;
  name: string;
  image: string;
};

export const items = <Item[]>[
  {
    id: 1,
    name: "Apples",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/ripe-apple-royalty-free-image-1659454396.jpg?crop=0.924xw:0.679xh;0.0197xw,0.212xh&resize=980:*",
  },
  {
    id: 2,
    name: "Bananas",
    image:
      "https://livelife.lk/wp-content/uploads/2024/08/organic_banana_sour.jpg",
  },
  {
    id: 3,
    name: "Bread",
    image:
      "https://theloopywhisk.com/wp-content/uploads/2024/08/Gluten-Free-Sandwich-Bread_1200px-2.jpg",
  },
  {
    id: 4,
    name: "Milk",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/004-soymilk.jpg/1200px-004-soymilk.jpg",
  },
  {
    id: 5,
    name: "Eggs",
    image:
      "https://grillonadime.com/wp-content/uploads/2024/07/blackstone-fried-eggs-5-2-2.jpg",
  },
];
