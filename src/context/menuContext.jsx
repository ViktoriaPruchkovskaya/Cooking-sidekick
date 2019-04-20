import React from "react";
import MenuLayout from "../layouts/menuLayout";

const menuContext = React.createContext({
  layout: MenuLayout
});

export default menuContext;
