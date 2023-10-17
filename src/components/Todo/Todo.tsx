import useTodo from "../../hooks/useTodo";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./Todo.module.css";

const Todo = () => {
  const { todoList, inputValue, addTodo, removeTodo, onInputChange } =
    useTodo();
  return (
    <div className={styles.container}>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} removeTodo={removeTodo} />
      ))}
      <div className={styles.input_form}>
        <input type="text" onChange={onInputChange} />
        <button onClick={() => addTodo(inputValue)}>추가</button>
      </div>
    </div>
  );
};

export default Todo;
