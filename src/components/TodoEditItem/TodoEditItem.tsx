import { useState } from "react";
import { BackButton } from "../BackButton";
import styles from "./TodoEditItem.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { actions } from "../../redux/slice/todos";

const EditTodo: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentTodo } = useAppSelector((state) => state.todos);
  const [newTitle, setNewTitle] = useState(currentTodo?.title || "");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleSave = () => {
    if (newTitle && currentTodo) {
      const newTodo = { ...currentTodo, title: newTitle };
      dispatch(actions.updateTodo(newTodo));
      navigate(-1);
    }
  };

  return (
    <>
      <BackButton />
      <div className={styles.editTodoContainer}>
        <input
          type="text"
          className={styles.editInput}
          value={newTitle}
          onChange={handleTitleChange}
        />
        <button className="edit-todo__save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
};

export default EditTodo;
