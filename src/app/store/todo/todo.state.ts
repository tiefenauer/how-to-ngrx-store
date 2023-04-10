import {Todo} from "../../components/todo/todo-list/todo";

export interface TodoStoreState { todos: Todo[], isLoading: boolean, error: any }

export const initialState = {todos: [], isLoading: false, error: null} as TodoStoreState;
