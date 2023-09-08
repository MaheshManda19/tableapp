import React, { useState } from "react";
import "./TableBody.css";
import { tableConfig } from "./common/config";

const TableBody = () => {
  return (
    <div className="Table-container">
      <table>
        <thead>
          <tr>
            {tableConfig.table.map(
              (cell, index) =>
                cell.type === "head" && (
                  <th key={index} style={{ textAlign: cell.align }}>
                    {cell.value}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {tableConfig.table.map(
            (cell, index) =>
              cell.type === "body" && (
                <tr key={index}>
                  <td style={{ textAlign: cell.align }}>{cell.value}</td>
                  {cell.data.map((value, valueIndex) => (
                    <td key={valueIndex} style={{ textAlign: cell.align }}>
                      {value}
                    </td>
                  ))}
                </tr>
              )
          )}
        </tbody>
        {tableConfig.table.map(
          (cell, index) =>
            cell.type === "foot" && (
              <tfoot key={index}>
                <tr>
                  <td style={{ textAlign: cell.align }}>{cell.value}</td>
                  {cell.data &&
                    cell.data.map((average, avgIndex) => (
                      <td
                        key={avgIndex}
                        style={{ textAlign: "left", color: "darkgreen" }}
                      >
                        {average}
                      </td>
                    ))}
                </tr>
              </tfoot>
            )
        )}
      </table>
    </div>
  );
};

export default TableBody;
