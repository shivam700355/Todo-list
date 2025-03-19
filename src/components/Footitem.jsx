// components/Footitem.js
import React from "react";

export const Footitem = ({ list, setList }) => {
  const handleDeleteButton = (index) => {
    const deletedList = [...list];
    deletedList.splice(index, 1);
    setList(deletedList);
    console.log(...list);
  };

  return (
    <ul className="list-group mt-3">
      {list.map((item, index) => (
        <li key={index} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center listitem">
          {item}
          <button className="btn btn-danger btn-sm" onClick={() => handleDeleteButton(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
