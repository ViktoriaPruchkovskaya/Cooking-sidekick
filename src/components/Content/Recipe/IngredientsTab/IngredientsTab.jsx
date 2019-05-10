import React, { useState } from "react";
import { Table } from "antd";

const IngredientsTab = ({ ingredients }) => {
  const [setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: "Ingredient",
      dataIndex: "name",
      width: 150
    },
    {
      title: "Quantity",
      dataIndex: "amount",
      width: 150
    }
  ];

  return (
    <Table
      rowSelection={selectedRowKeys => setSelectedRowKeys({ selectedRowKeys })}
      columns={columns}
      dataSource={ingredients}
      rowKey="id"
      pagination={false}
      scroll={{ y: 225 }}
    />
  );
};

export default IngredientsTab;
