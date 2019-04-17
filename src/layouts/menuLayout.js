import shortid from "shortid";
const MenuLayout = [
  {
    id: shortid.generate(),
    name: "Category",
    items: [
      { id: shortid.generate(), name: "Breakfast", path: "/breakfast" },
      { id: shortid.generate(), name: "Desserts", path: "/desserts" },
      { id: shortid.generate(), name: "Dinners", path: "/dinners" },
      { id: shortid.generate(), name: "Lunch", path: "/lunch" }
    ]
  },
  {
    id: shortid.generate(),
    name: "Origin",
    items: [
      { id: shortid.generate(), name: "Chinese", path: "/chinese" },
      { id: shortid.generate(), name: "Indian", path: "/indian" },
      { id: shortid.generate(), name: "Italian", path: "/italian" },
      { id: shortid.generate(), name: "Mexican", path: "/mexican" }
    ]
  },
  {
    id: shortid.generate(),
    name: "Difficulty",
    items: [
      { id: shortid.generate(), name: "Easy", path: "/easy" },
      { id: shortid.generate(), name: "Medium", path: "/medium" },
      { id: shortid.generate(), name: "Hard", path: "/hard" }
    ]
  }
];

export default MenuLayout;
