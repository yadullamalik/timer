import { useState, useEffect } from "react";
import "./App.css";
import { Count } from "./Components/Counter";
import { Todos } from "./Components/Todos";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show ? <Count /> : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
