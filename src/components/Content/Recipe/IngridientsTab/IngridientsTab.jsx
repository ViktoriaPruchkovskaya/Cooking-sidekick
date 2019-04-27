import React, { useState } from "react";
import { Table } from "antd";

const IngridientsTab = () => {
  const [setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: "Ingridient",
      dataIndex: "ingridient",
      width: 150
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      width: 150
    }
  ];
  const data = [
    {
      key: "1",
      ingridient: "shortening",
      quantity: "1 cup "
    },
    {
      key: "2",
      ingridient: "white sugar",
      quantity: "1 cup"
    },
    {
      key: "3",
      ingridient: "eggs",
      quantity: 2
    },
    {
      key: "4",
      ingridient: "vanilla extract",
      quantity: "1 1/2 teaspoons "
    },
    {
      key: "5",
      ingridient: "flour",
      quantity: " 3 cups"
    },
    {
      key: "6",
      ingridient: "salt",
      quantity: " 1 teaspoon"
    },
    {
      key: "7",
      ingridient: "baking soda",
      quantity: "1/2 teaspoon"
    },
    {
      key: "8",
      ingridient: "colored sugar ",
      quantity: "1/3 cup"
    }
  ];

  return (
    <Table
      rowSelection={selectedRowKeys => setSelectedRowKeys({ selectedRowKeys })}
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{ y: 225 }}
    />
  );
};

export default IngridientsTab;
