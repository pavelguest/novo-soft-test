import React, { useState } from "react";
import styles from "./TodoForm.module.scss";
import { actions } from "../../redux/slice/todos";
import { useAppDispatch } from "../../redux/hooks/redux";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      actions.addTodo({
        id: Math.random().toString(),
        title,
        completed: false,
      })
    );
    setTitle("");
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.addInput}
      />
      <button className={styles.submitButton} disabled={!title} type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
