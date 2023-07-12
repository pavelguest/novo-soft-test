import { useParams } from "react-router-dom";
import EditTodo from "../../components/TodoEditItem/TodoEditItem";
import styles from "./EditTodoPage.module.scss";

const EditTodoPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  return <div className={styles.repoContainer}>{id && <EditTodo />}</div>;
};

export default EditTodoPage;
