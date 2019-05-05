import React, { useState } from "react";
import { Table } from "antd";

const IngridientsTab = ({ingridients}) => {
  const [setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: "Ingridient",
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
      dataSource={ingridients}
      rowKey="id"
      pagination={false}
      scroll={{ y: 225 }}
    />
  );
};

export default IngridientsTab;
