import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

export default ({ data, columns }) => (
  <BootstrapTable keyField="id" data={data} columns={columns} />
);
