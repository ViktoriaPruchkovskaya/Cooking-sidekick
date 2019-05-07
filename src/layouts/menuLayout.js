import shortid from "shortid";
const MenuLayout = [
  {
    id: shortid.generate(),
    name: "Category",
    items: [
      {
        id: shortid.generate(),
        name: "Starter",
        query: {category: 1}
      },
      {
        id: shortid.generate(),
        name: "Satad",
        query: { category: 2 }
      },
      {
        id: shortid.generate(),
        name: "Main course",
        query: { category: 3 }
      },
      {
        id: shortid.generate(),
        name: "Soup",
        query: { category: 4 }
      },
      {
        id: shortid.generate(),
        name: "Dessert",
        query: { category: 5 }
      }
    ]
  },
  {
    id: shortid.generate(),
    name: "Origin",
    items: [
      { id: shortid.generate(), name: "Chinese", query: "/chinese" },
      { id: shortid.generate(), name: "Indian", query: "/indian" },
      { id: shortid.generate(), name: "Italian", query: "/italian" },
      { id: shortid.generate(), name: "Mexican", query: "/mexican" }
    ]
  },
  {
    id: shortid.generate(),
    name: "Difficulty",
    items: [
      { id: shortid.generate(), name: "Easy", query: "/easy" },
      { id: shortid.generate(), name: "Medium", query: "/medium" },
      { id: shortid.generate(), name: "Hard", query: "/hard" }
    ]
  }
];

export default MenuLayout;
