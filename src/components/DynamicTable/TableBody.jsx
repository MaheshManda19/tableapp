import React, { useState } from "react";
import './TableBody.css'; 

function TableBody({ columns }) {
  // Initialize state to store the user-entered text for each cell
  const [cellData, setCellData] = useState([
    "Data 1",
    "Data 2",
    "Data 3",
    "Data 4",
    "Data 5",
  ]);

  // Handle input change for a specific cell
  const handleInputChange = (index, event) => {
    const newData = [...cellData];
    newData[index] = event.target.value;
    setCellData(newData);
  };

  return (
    <tbody>
      <tr>
        {columns.map((column, index) => (
          <td key={index}>
            <input
              type="text"
              value={cellData[index]}
              onChange={(event) => handleInputChange(index, event)}
            />
          </td>
        ))}
      </tr>
    </tbody>
  );
}

export default TableBody;
