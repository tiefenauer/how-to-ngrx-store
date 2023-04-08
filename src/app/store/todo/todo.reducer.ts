import {createReducer, on} from '@ngrx/store';
import {loadTodos, loadTodosError, loadTodosSuccess} from "./todo.action";
import {TodoStoreState} from "./todo.state";

export const initialState = {todos: [], isLoading: false, error: null} as TodoStoreState;

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({...state, isLoading: true})),
  on(loadTodosSuccess, (state, {todos}) => ({...state, todos, isLoading: false})),
  on(loadTodosError, (state, {error}) => ({...state, todos: [], error, isLoading: false})),
);
