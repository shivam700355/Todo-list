import React, { useState } from "react";

export const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(Function('"use strict";return (' + input + ')')());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "Del") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <input type="text" className="form-control" value={input} readOnly />
      <div className="row mt-3 justify-content-center align-items-center">
        {[...Array(10).keys()].map((num) => (
          <button
            key={num}
            className="btn btn-outline-primary  p-2 m-2 col-2"
            onClick={() => handleClick(num.toString())}
          >
            {num}
          </button>
        ))}
        {["+", "-", "*", "/", ".", "C", "Del", "="].map((operator) => (
          <button
            key={operator}
            className="btn btn-outline-primary  p-2 m-2 col-2"
            onClick={() => handleClick(operator)}
          >
            {operator}
          </button>
        ))}
      </div>
    </>
  );
};
