import React from "react";
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
                    {Array.isArray(cell.value)
                      ? cell.value.map((header, headerIndex) => (
                          <div key={headerIndex}>{header}</div>
                        ))
                      : cell.value}
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
                  {Array.isArray(cell.value)
                    ? cell.value.map((value, valueIndex) => (
                        <td key={valueIndex} style={{ textAlign: cell.align }}>
                          {value}
                        </td>
                      ))
                    : <td style={{ textAlign: cell.align }}>{cell.value}</td>}
                </tr>
              )
          )}
        </tbody>
        {tableConfig.table.map(
          (cell, index) =>
            cell.type === "foot" && (
              <tfoot key={index}>
                <tr>
                  {Array.isArray(cell.value)
                    ? cell.value.map((average, avgIndex) => (
                        <td
                          key={avgIndex}
                          style={{ textAlign: "left", color: "darkgreen" }}
                        >
                          {average}
                        </td>
                      ))
                    : <td style={{ textAlign: "left", color: "darkgreen" }}>{cell.value}</td>}
                </tr>
              </tfoot>
            )
        )}
      </table>
    </div>
  );
};

export default TableBody;
