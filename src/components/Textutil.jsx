import React, { useState } from "react";

export const TextUtil = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleCapitalize = () => {
    setText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        value={text}
        onChange={handleInputChange}
      />
      <div className="row">
        <button
          className="btn btn-outline-primary m-2 col-3"
          onClick={handleUppercase}
        >
          Uppercase
        </button>
        <button
          className="btn btn-outline-primary m-2 col-3"
          onClick={handleLowercase}
        >
          Lowercase
        </button>
        <button
          className="btn btn-outline-primary m-2 col-3"
          onClick={handleCapitalize}
        >
          Capitalize
        </button>
        <button className="btn btn-outline-danger m-2 col-3" onClick={handleClear}>
          Clear
        </button>
        <div className="mt-3">
          <h5>Output:</h5>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
