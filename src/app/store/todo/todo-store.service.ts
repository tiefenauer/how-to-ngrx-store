import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadTodos, selectTodo, toggleFavorite, unselectTodo} from "./todo.action";
import {selectIsLoading, selectSelectedTodo, selectTodos} from "./todo.selectors";
import {Todo} from "../../components/todo/todo-list/todo";
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
    return this.store$.select(selectIsLoading)
  }

  getTodos(): Observable<Todo[]> {
    return this.store$.select(selectTodos);
  }

  getSelectedTodo(): Observable<Todo> {
    return this.store$.select(selectSelectedTodo)
  }

  selectTodo(id: number): void {
    this.store$.dispatch(selectTodo({id}))
  }

  unselectTodo(id: number): void {
    this.store$.dispatch(unselectTodo({id}))
  }

  toggleFavorite(todo: Todo) {
    this.store$.dispatch(toggleFavorite({id: todo.id}))
  }
}
