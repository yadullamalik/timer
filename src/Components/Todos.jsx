import { useState, useEffect } from "react";
import axios from "axios";
import "./Todo.css";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("Todos is mounted");
    getData();
    return () => {
      console.log("Todos is unmounted");
    };
  }, [page]);
  const getData = () => {
    axios
      .get(`http://localhost:3005/todos?_page=${page}&_limit=3`)
      .then((data) => {
        setTodos(data.data);
      });
  };

  return (
    <div className="main">
      <input
        type="text"
        placeholder="Enter Tood"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          const payload = {
            title: text,
            status: false,
          };
          axios.post("http://localhost:3005/todos", payload).then(getData);
        }}
      >
        Add Todo
      </button>
      {todos.map((t) => (
        <div>
          <h1>
            {t.id}. {t.title}
          </h1>
        </div>
      ))}
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
