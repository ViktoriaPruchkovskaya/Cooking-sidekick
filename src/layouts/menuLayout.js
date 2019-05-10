import shortid from "shortid";
const MenuLayout = [
  {
    id: shortid.generate(),
    name: "Category",
    items: [
      {
        id: shortid.generate(),
        name: "Starter",
        query: { category: 1 }
      },
      {
        id: shortid.generate(),
        name: "Salad",
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
      { id: shortid.generate(), name: "Chinese", query: { origin: 1 } },
      { id: shortid.generate(), name: "Italian", query: { origin: 2 } },
      { id: shortid.generate(), name: "European", query: { origin: 3 } },
      { id: shortid.generate(), name: "French", query: { origin: 4 } }
    ]
  },
  {
    id: shortid.generate(),
    name: "Difficulty",
    items: [
      { id: shortid.generate(), name: "Easy", query: { difficulty: 1 } },
      { id: shortid.generate(), name: "Medium", query: { difficulty: 2 } },
      { id: shortid.generate(), name: "Hard", query: { difficulty: 3 } }
    ]
  }
];

export default MenuLayout;
