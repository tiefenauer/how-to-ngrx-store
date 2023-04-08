import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../components/todo/todo/todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get("https://my-json-server.typicode.com/tiefenauer/how-to-ngrx-store/todos") as Observable<Todo[]>
  }
}
