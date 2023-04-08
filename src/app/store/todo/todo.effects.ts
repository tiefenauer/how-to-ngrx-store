import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TodoService} from "../../services/todo/todo.service";
import {loadTodos, loadTodosError, loadTodosSuccess} from "./todo.action";
import {catchError, map, of, switchMap} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class TodoEffects {
  constructor(private actions: Actions, private todoService: TodoService) {
  }

  loadTodos = createEffect(() =>
    this.actions.pipe(
      ofType(loadTodos),
      switchMap(() => this.todoService.fetchTodos().pipe(
        map((todos) => loadTodosSuccess({todos})),
        catchError(error => of(loadTodosError({error})))
      ))
    )
  )
}
