import React, { useState } from "react";

function TableHeader({ columns, onEditColumn }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newName, setNewName] = useState("");

  const handleStartEdit = (index) => {
    setEditingIndex(index);
    setNewName(columns[index]);
  };

  const handleFinishEdit = (index) => {
    const updatedName = newName.trim();
    if (updatedName !== "") {
      columns[index] = updatedName;
    }
    setEditingIndex(null); // Close edit mode
  };

  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            onClick={() => {
              if (editingIndex === null) {
                handleStartEdit(index);
              }
            }}
            style={{
              cursor: "pointer",
              textDecoration: editingIndex === index ? "underline" : "none",
            }}
          >
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button onClick={() => handleFinishEdit(index)}>Save</button>
              </div>
            ) : (
              <div>{column}</div>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
