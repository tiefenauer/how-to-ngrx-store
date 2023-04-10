import {createReducer, on} from '@ngrx/store';
import {loadTodos, loadTodosError, loadTodosSuccess, selectTodo, toggleFavorite, unselectTodo} from "./todo.action";
import {initialState, TodoStoreState} from "./todo.state";

export const TODO_FEATURE_NAME = 'todo'

function onSelectTodo(state: TodoStoreState, {id}: { id: number }): TodoStoreState {
  return {
    ...state,
    todos: state.todos.map(todo => ({...todo, selected: todo.id === id}))
  }
}

function unselectAll(state: TodoStoreState, {id}: { id: number }): TodoStoreState {
  return {
    ...state,
    todos: state.todos.map(todo => ({...todo, selected: false}))
  }
}

function onToggleFavorite(state: TodoStoreState, {id}: { id: number }): TodoStoreState {
  return {
    ...state,
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, favorite: !todo.favorite}
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
  on(unselectTodo, unselectAll),
  on(toggleFavorite, onToggleFavorite)
);
