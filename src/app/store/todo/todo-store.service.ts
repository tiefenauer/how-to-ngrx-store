import {Injectable} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {loadTodos, selectTodo, unselectTodo} from "./todo.action";
import {selectIsLoading, selectSelectedTodo, selectTodos} from "./todo.selectors";
import {Todo} from "../../components/todo/todo-list/todo-list-item/todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {

  constructor(private store$: Store) {
  }

  loadTodos(): void {
    this.store$.dispatch(loadTodos())
  }

  isLoading(): Observable<Boolean> {
    return this.store$.pipe(select(selectIsLoading))
  }

  getTodos(): Observable<Todo[]> {
    return this.store$.pipe(select(selectTodos))
  }

  getSelectedTodo(): Observable<Todo> {
    return this.store$.pipe(select(selectSelectedTodo))
  }

  selectTodo(id: number): void {
    return this.store$.dispatch(selectTodo({id}))
  }

  unselectTodo(id: number): void {
    return this.store$.dispatch(unselectTodo({id}))
  }
}
