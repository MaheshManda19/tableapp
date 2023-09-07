import React from "react";
function AddColumnButton({ onClick }) {
  return (
    <div>
      {" "}
      <button onClick={onClick}>Add Column</button>{" "}
    </div>
  );
}
export default AddColumnButton;
