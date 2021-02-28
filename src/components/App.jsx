import React, { useState } from "react";

function App() {
  const [inputText, setInput] = useState("");
  const [item, setItem] = useState([]);

  function handleEvent() {
    setItem((prev) => {
      return [...prev, inputText];
    });
    setInput("");
  }
  function updateText(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateText} type="text" value={inputText} />
        <button onClick={handleEvent}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((items) => (
            <li> {items}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
