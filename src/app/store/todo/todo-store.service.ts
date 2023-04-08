import {Injectable} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {loadTodos} from "./todo.action";
import {selectIsLoading, selectTodos} from "./todo.selectors";
import {Todo} from "../../components/todo/todo/todo";
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

  getTodos(): Observable<Todo[]> {
    return this.store$.pipe(select(selectTodos))
  }

  isLoading(): Observable<Boolean> {
    return this.store$.pipe(select(selectIsLoading))
  }
}
