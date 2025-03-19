// App.js
import React, { useState } from "react";
import { Footitem } from "./components/Footitem";
import { Calculator } from "./components/Calculator";
import { TextUtil } from "./components/Textutil";
import { Layout } from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [list, setList] = useState([]);

  function addValue(event) {
    if (event.key === "Enter") {
      const inputValue = document.querySelector("#inputtext").value;
      if (inputValue.trim() !== "") {
        setList([...list, inputValue.trim()]);
        document.querySelector("#inputtext").value = "";
      }
    }
  }
  let Todo = "Todo List";
  let cal = "Calculator";
  let text = "Text Util";
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <a className="navbar-brand" href="#">Your Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>

        </nav>
        <div className="row">
          <Layout head={Todo}>
            <input type="text" id="inputtext" className="form-control mt-3 pb-3" placeholder="Enter text" onKeyDown={addValue} />
            <Footitem list={list} setList={setList} />
          </Layout>
          <Layout head={cal}>
            <Calculator />
          </Layout>
          <Layout head={text}>
            <TextUtil />
          </Layout>
        </div>
      </div>
    </div>
  );
}

export default App;
