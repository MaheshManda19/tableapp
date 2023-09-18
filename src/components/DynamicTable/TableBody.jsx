import React, { useState } from "react";
import "./TableBody.css";
import { tableConfig } from "./common/config";

const TableBody = () => {
  const headerData = tableConfig.table[0]?.record || [];
  const bodyData = tableConfig.table[1]?.record || [];
  const footerData = tableConfig.table[0]?.record || [];

  const [entriesPerPage, setEntriesPerPage] = useState(5); // Default number of entries per page
  const [currentPage, setCurrentPage] = useState(1);

  if (headerData.length === 0 || bodyData.length === 0) {
    return <div>No data available</div>;
  }

  const totalEntries = bodyData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const getColumnData = (columnIndex) => {
    return {
      value: bodyData.map((row) => row.value[columnIndex]),
      align: headerData[columnIndex]?.align || "left",
    };
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing entries per page
  };

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;

  return (
    <div className="Table-container">
      <h2 className="header">DynamicTable</h2>

      <div className="table-scroll">
        <label>
          Show{" "}
          <select value={entriesPerPage} onChange={handleEntriesPerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>{" "}
          entries
        </label>
        <table>
          <thead>
            <tr>
              {headerData.map((header, headerIndex) => (
                <th key={headerIndex} style={{ textAlign: header.align }}>
                  {header.value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyData.slice(startIndex, endIndex).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.value.map((_, columnIndex) => (
                  <td
                    key={columnIndex}
                    style={{ textAlign: getColumnData(columnIndex).align }}
                  >
                    {getColumnData(columnIndex).value[startIndex + rowIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              {footerData.map((footer, footerIndex) => (
                <th key={footerIndex} style={{ textAlign: footer.align }}>
                  {footer.value}
                </th>
              ))}
            </tr>
          </tfoot>
        </table>
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableBody;
