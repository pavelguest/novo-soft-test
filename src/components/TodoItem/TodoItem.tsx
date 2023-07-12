import React from "react";
import styles from "./TodoItem.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/redux";
import { ITodo } from "../../redux/types/reposTypes";
import { actions } from "../../redux/slice/todos";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleToggleComplete = () => {
    dispatch(actions.toggleComplete(todo.id));
  };

  const handleDelete = () => {
    dispatch(actions.deleteTodo(todo.id));
  };

  const handleNavigateToEditTodo = (id: string) => {
    dispatch(actions.getTodoById(id));
    navigate(`../todo/${id}`);
  };

  return (
    todo && (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
          />
          <p className={todo.completed ? styles.completeTitle : styles.title}>
            {todo.title}
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.deleteButton}
            onClick={() => handleNavigateToEditTodo(todo.id)}
          >
            Edit
          </button>
          <button className={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    )
  );
};

export default TodoItem;
