export interface IInitialState {
  todos: ITodo[];
  currentTodo: ITodo | undefined;
}

export interface ITodo {
  title: string;
  id: string;
  completed: boolean;
}
