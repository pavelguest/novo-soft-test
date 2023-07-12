import React from "react";
import { TodoItem } from "../TodoItem";
import styles from "./TodoIList.module.scss";
import { useAppSelector } from "../../redux/hooks/redux";

const TodoList: React.FC = () => {
  const { todos } = useAppSelector((state) => state.todos);
  console.log(todos);

  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
