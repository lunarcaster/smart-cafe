// src/data/menuItem.js

export const menuItem = [
  {
    name: "Aurora Matcha",
    category:"Non-Coffee",
    price: "Rp 28.000",
    desc: "Refreshing matcha with a smooth earthy flavor and a vibrant look inspired by the aurora sky.",
    image: new URL("../assets/aurora-matcha.png", import.meta.url).href
  },
  {
    name: "Velvet Lunar Chocolate",
    category:"Non-Coffee",
    price: "Rp 29.000",
    desc: "Creamy chocolate drink with a silky texture, made for warm and indulgent moments.",
    image: new URL("../assets/velvet-lunar-chocolate.png", import.meta.url).href
  },
  {
    name: "Honey Moon Milk Tea",
    category:"Non-Coffee",
    price: "Rp 27.000",
    desc: "Sweet and mellow milk tea with a touch of honey, creating a soft and comforting balance.",
    image: new URL("../assets/honey-moon-milk-tea.png", import.meta.url).href
  },
  {
    name: "Starlight Strawberry Soda",
    category:"Non-Coffee",
    price: "Rp 27.000",
    desc: "Sparkling strawberry soda with a fresh fruity taste, light bubbles, and a refreshing finish.",
    image: new URL("../assets/starlight-strawberry-soda.png", import.meta.url).href
  },
  {
    name: "Golden Moon Croissant",
    category:"Dessert",
    price: "Rp 19.000",
    desc: "Flaky buttery croissant baked until golden, light and perfect for pairing with coffee.",
    image: new URL("../assets/golden-moon-croissant.png", import.meta.url).href
  },
  {
    name: "Lunar Tiramissu Slice",
    category:"Dessert",
    price: "Rp 25.000",
    desc: "Soft layered tiramisu with creamy texture and delicate coffee notes in every bite.",
    image: new URL("../assets/lunar-tiramissu-slice.png", import.meta.url).href
  },
  {
    name: "Moonrise Chicken Sandwich",
    category:"Food",
    price: "Rp 31.000",
    desc: "Toasted sandwich filled with savory chicken, fresh vegetables, and a satisfying texture.",
    image: new URL("../assets/moonrise chicken sanddwich.png", import.meta.url).href
  },
  {
    name: "Creamy Starlight Pasta",
    category:"Food",
    price: "Rp 37.000",
    desc: "Tender pasta coated in a rich creamy sauce, smooth, comforting, and full of flavor.",
    image: new URL("../assets/creamy-starlight-pasta.png", import.meta.url).href
  },
  {
    name: "Lunarcaster Coffee",
    category:"Coffee",
    price: "Rp 29.000",
    desc: "Smooth espresso blended with creamy milk and soft foam, crafted as the signature latte of La Lunarcaster Cafe.",
    image: new URL("../assets/lunarcaster-coffee.jpeg", import.meta.url).href
  },
  {
    name: "Moonlit Caramel Espresso",
    category:"Coffee",
    price: "Rp 31.000",
    desc: "Bold espresso infused with sweet caramel, delivering a rich and warm flavor in every sip.",
    image: new URL("../assets/moonlit-caramel-espresso.png", import.meta.url).href
  },
  {
    name: "Vanilla Moon Cappucino",
    category:"Coffee",
    price: "Rp 30.000",
    desc: "Classic cappuccino with a soft vanilla aroma and velvety foam, perfect for a calm evening.",
    image: new URL("../assets/vanilla-moon-cappucino.png", import.meta.url).href
  },
  {
    name: "Midnight Hazelnut Mocca",
    category:"Coffee",
    price: "Rp 33.000",
    desc: "Rich mocha infused with hazelnut, topped with creamy froth, delivering a smooth and indulgent experience for a cozy night.",
    image: new URL("../assets/midnight-hazelnut-mocca.png", import.meta.url).href
  },
];

export const categories = ["All", "Coffee", "Non-Coffee", "Dessert", "Food"];