import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TodoStoreState} from "./todo.state";

let getTodoState = createFeatureSelector<TodoStoreState>('todo');

export const selectIsLoading = createSelector(getTodoState, (state: TodoStoreState) => state.isLoading)
export const selectTodos = createSelector(getTodoState, (state: TodoStoreState) => state.todos)
