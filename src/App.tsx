import { useEffect, useState } from "react";
import "./App.css";

import Todos from "./component/Todos";
import { getTodos } from "./api/todos/todoes-api";
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [finishedCount, setFinishedCount] = useState(0);
  useEffect(() => {
    console.log("app mounted");
    getTodos().then((todos) => {
      console.log({ todos });
      setTodos(todos);
      setTimeout(() => {
        setTodos((todoArray) => {
          return todoArray.map((item, index) => {
            if (index === 0) {
              return {
                ...item,
                completed: true,
              };
            }
            return item;
          });
        });
      }, 2000);
    });
  }, []);

  useEffect(() => {
    const count = todos.filter((todo) => todo.completed).length;
    setFinishedCount(count);
  }, [todos]);
  return (
    <>
      <p className="text-2xl">
        Finished Todos = <span>{finishedCount}</span>
      </p>
      <Todos todoArray={todos} />
    </>
  );
}

export default App;
