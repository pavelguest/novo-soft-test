import styles from "./MainPage.module.scss";
import { TodoList } from "../../components/TodoList";
import { TodoForm } from "../../components/TodoForm";

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default MainPage;
