import {createAction, props, union} from '@ngrx/store';
import {Todo} from "../../components/todo/todo/todo";
import {HttpErrorResponse} from "@angular/common/http";

enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  LoadTodosSuccess = '[Todos] Load Todos Success',
  LoadTodosError = '[Todo] Load Todos Error',
}

export const loadTodos = createAction(TodoActionTypes.LoadTodos)
export const loadTodosSuccess = createAction(TodoActionTypes.LoadTodosSuccess, props<{ todos: Todo[] }>())
export const loadTodosError = createAction(TodoActionTypes.LoadTodosError, props<{ error: HttpErrorResponse }>())

const allActions = union({
  loadTodos,
  loadTodosSuccess,
  loadTodosError
})

export type TodoAction = typeof allActions
