import todoItemInt from "../types/todoItemInt";
import styles from "./TodoItem.module.css";
// import todoItemInt from "../types/todoItemInt";

const TodoItem: React.FC<{
  item: todoItemInt;
  removeTodo: (target: todoItemInt) => void;
}> = ({ item, removeTodo }) => {
  return (
    <div className={styles.item}>
      <p>{item.title}</p>
      <button onClick={() => removeTodo(item)}>삭제</button>
    </div>
  );
};

export default TodoItem;
