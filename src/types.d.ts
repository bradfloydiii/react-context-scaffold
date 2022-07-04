// type ToggleTodo = (selectedTodo: ITodo) => void;
// type RemoveTodo = (selectedTodo: ITodo) => void;
// type AddTodo = (text: string) => void;

// export interface ITodo {
//   text: string;
//   complete: boolean;
// }

// export interface IAddTodoProps {
//   addTodo: AddTodo;
// }

// export interface ITodoListProps {
//   todos: Array<ITodo>;
//   toggleTodo: ToggleTodo;
//   removeTodo: RemoveTodo;
// }

// export interface ITodoListItemProps {
//   id: number;
//   todo: ITodo;
//   toggleTodo: ToggleTodo;
//   removeTodo: RemoveTodo;
// }

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}
