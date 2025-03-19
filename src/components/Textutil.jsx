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

  // Calculate Word Count
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // Calculate Space Count
  const spaceCount = (text.match(/\s/g) || []).length;

  // Count Uppercase Letters
  const uppercaseCount = (text.match(/[A-Z]/g) || []).length;

  return (
    <>
      <input
        type="text"
        className="form-control mt-3"
        value={text}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <div className="mt-3 justify-content-center align-items-center p-3">
        <button className="btn btn-outline-primary p-2 m-2" onClick={handleUppercase}>
          Uppercase
        </button>
        <button className="btn btn-outline-primary p-2 m-2" onClick={handleLowercase}>
          Lowercase
        </button>
        <button className="btn btn-outline-primary p-2 m-2" onClick={handleCapitalize}>
          Capitalize
        </button>
        <button className="btn btn-outline-danger p-2 m-2" onClick={handleClear}>
          Clear
        </button>

        <div className="mt-3">
          <h5>Output:</h5>
          <p>{text}</p>
        </div>

        {/* Displaying Counts */}
        <div className="mt-3">
          <h6>Word Count: {wordCount}</h6>
          <h6>Space Count: {spaceCount}</h6>
          <h6>Uppercase Letters: {uppercaseCount}</h6>
        </div>
      </div>
    </>
  );
};
