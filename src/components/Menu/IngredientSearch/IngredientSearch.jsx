import React, { Component, useState } from "react";
import { TreeSelect } from "antd";

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [
  {
    title: "Shrimp",
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

class IngridientSearch extends Component {
  state = {
    value: undefined
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: "Select ingredient",
      style: {
        width: 250
      }
    };
    return <TreeSelect {...tProps} />;
  }
}

// const IngridientSearch = () => {
//   const [value, setValue] = useState({ undefined });
//   // onClick = value => {
//   //   console.log("onChange ", value);
//   //   setValue({ value });
//   // };
//   const tProps = {
//     treeData,
//     value: value,
//     onChange: setValue({value}),
//     treeCheckable: true,
//     showCheckedStrategy: SHOW_PARENT,
//     searchPlaceholder: "Select ingridient",
//     style: {
//       width: 250
//     }
//   };
//   return <TreeSelect {...tProps} />;
// };

export default IngridientSearch;
