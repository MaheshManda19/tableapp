import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import AddColumnButton from "./AddColumnButton";
import './DynamicTable.css';

function DynamicTable() {
  const [columns, setColumns] = useState([
    "Column 1",
    "Column 2",
    "Column 3",
    "Column 4",
    "Column 5",
  ]);

  const addColumn = () => {
    const newColumn = `Column ${columns.length + 1}`;
    setColumns([...columns, newColumn]);
  };

  return (
    <div className="container">
      <center><h2>Dynamic Table</h2></center>
      <table className="table table-bordered">
        <TableHeader columns={columns} />
        <TableBody columns={columns} />
      </table>
      <div className="text-center">
      </div>
    </div>
  );
}

export default DynamicTable;
