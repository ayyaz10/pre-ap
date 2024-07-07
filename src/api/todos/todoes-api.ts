import { Todo } from "../../types";

export const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const jsonResponse = await response.json();
  return jsonResponse as Todo[];
};
