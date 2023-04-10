import {createReducer, on} from '@ngrx/store';
import {loadTodos, loadTodosError, loadTodosSuccess, selectTodo, toggleFavorite, unselectTodo} from "./todo.action";
import {adapter, initialState, TodoStoreState} from "./todo.state";
import {Update} from "@ngrx/entity";
import {Todo} from "../../components/todo/todo-list/todo";

export const TODO_FEATURE_NAME = 'todo'

function onSelectTodo(state: TodoStoreState, {id}: { id: number }): TodoStoreState {
  return adapter.updateOne({id, changes: {selected: true}} as Update<Todo>, unselectAll(state, {id}))
}

function unselectAll(state: TodoStoreState, {id}: { id: number }): TodoStoreState {
  return adapter.map(entity => ({...entity, selected: false}), state)
}

function onToggleFavorite(state: TodoStoreState, {id}: { id: number }): TodoStoreState {
  return adapter.updateOne({id, changes: {favorite: !state.entities[id].favorite}} as Update<Todo>, state)
}

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({...state, isLoading: true})),
  on(loadTodosSuccess, (state, {todos}) => adapter.upsertMany(todos, {...state, isLoading: false})),
  on(loadTodosError, (state, {error}) => ({...state, error, isLoading: false})),
  on(selectTodo, onSelectTodo),
  on(unselectTodo, unselectAll),
  on(toggleFavorite, onToggleFavorite)
);
