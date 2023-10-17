import { useState } from "react";
import todoItemInt from "../components/types/todoItemInt";
let id = 0;
export default function useTodo() {
  const [todoList, setTodoList] = useState<todoItemInt[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTodo = (newTitle: string) => {
    id++;
    const newTodo = {
      id,
      title: newTitle,
    };
    setTodoList((state) => {
      const newState: todoItemInt[] = state.concat(newTodo);
      return newState;
    });
    setInputValue("");
  };

  const removeTodo = (target: todoItemInt) => {
    setTodoList((state) => {
      const newState = state.filter((el: todoItemInt) => el.id !== target.id);
      return newState;
    });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return {
    todoList,
    inputValue,
    addTodo,
    removeTodo,
    onInputChange,
  };
}
