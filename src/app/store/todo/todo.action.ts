import {createAction, props, union} from '@ngrx/store';
import {Todo} from "../../components/todo/todo-list/todo";
import {HttpErrorResponse} from "@angular/common/http";

enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  LoadTodosSuccess = '[Todos] Load Todos Success',
  LoadTodosError = '[Todo] Load Todos Error',
  SelectTodo = '[Todo] Select Todo',
  UnselectTodo = '[Todo] Unselect Todo',
  ToggleFavorite = '[Todo] Toggle Favorite',
}

export const loadTodos = createAction(TodoActionTypes.LoadTodos)
export const loadTodosSuccess = createAction(TodoActionTypes.LoadTodosSuccess, props<{ todos: Todo[] }>())
export const loadTodosError = createAction(TodoActionTypes.LoadTodosError, props<{ error: HttpErrorResponse }>())
export const selectTodo = createAction(TodoActionTypes.SelectTodo, props<{ id: number }>())
export const unselectTodo = createAction(TodoActionTypes.UnselectTodo, props<{ id: number }>())
export const toggleFavorite = createAction(TodoActionTypes.ToggleFavorite, props<{ id: number }>())

const allActions = union({
  loadTodos,
  loadTodosSuccess,
  loadTodosError,
  selectTodo,
  unselectTodo,
  toggleFavorite
})

export type TodoAction = typeof allActions
