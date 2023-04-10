import {Todo} from "../../components/todo/todo-list/todo-list-item/todo";

export interface TodoStoreState { todos: Todo[], isLoading: boolean, error: any }
