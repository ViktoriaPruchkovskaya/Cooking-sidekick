import React from "react";
import { TreeSelect } from "antd";

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [
  {
    title: "Beef",
    value: "0-0",
    key: "0-0"
  },
  {
    title: "Beans and Legumes",
    value: "0-1",
    key: "0-1"
  },
  {
    title: "Chicken Recipes",
    value: "0-2",
    key: "0-2"
  },
  {
    title: "Chocolate",
    value: "0-3",
    key: "0-3"
  }
];

class IngridientSearch extends React.Component {
  state = {
    value: undefined
  };

  onChange = value => {
    console.log("onChange ", value);
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: "Select ingridient",
      style: {
        width: 250
      }
    };
    return <TreeSelect {...tProps} />;
  }
}

export default IngridientSearch;
