import {createAction, props} from '@ngrx/store';
import {Todo} from "../../components/todo/todo/todo";
import {HttpErrorResponse} from "@angular/common/http";

export const loadTodos = createAction('[Todos] Load Todos')
export const loadTodosSuccess = createAction('[Todos] Load Todos Success', props<{ todos: Todo[] }>())
export const loadTodosError = createAction('[Todos] Load Todos Error', props<{ error: HttpErrorResponse }>())

