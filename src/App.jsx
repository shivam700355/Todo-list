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
        <div className="row">
          <Layout head={Todo}>
            <input type="text"  id="inputtext" className="form-control" placeholder="Enter text" onKeyDown={addValue}/>
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
