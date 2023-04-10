import {createReducer, on} from '@ngrx/store';
import {loadTodos, loadTodosError, loadTodosSuccess, selectTodo, unselectTodo} from "./todo.action";
import {TodoStoreState} from "./todo.state";

export const TODO_FEATURE_NAME = 'todo'

export const initialState = {todos: [], isLoading: false, error: null} as TodoStoreState;

function onSelectTodo(state: TodoStoreState, {id}: { id: number }): TodoStoreState {
  return {
    ...state,
    todos: state.todos.map(todo => ({...todo, selected: todo.id === id}))
  }
}

function onUnselectTodo(state: TodoStoreState, {id}: { id: number }): TodoStoreState {
  return {
    ...state,
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, selected: false}
      }
      return todo
    })
  }
}

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({...state, isLoading: true})),
  on(loadTodosSuccess, (state, {todos}) => ({...state, todos, isLoading: false})),
  on(loadTodosError, (state, {error}) => ({...state, todos: [], error, isLoading: false})),
  on(selectTodo, onSelectTodo),
  on(unselectTodo, onUnselectTodo)
);
