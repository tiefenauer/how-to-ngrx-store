import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TodoStoreState} from "./todo.state";
import {TODO_FEATURE_NAME} from "./todo.reducer";

let getTodoState = createFeatureSelector<TodoStoreState>(TODO_FEATURE_NAME);

export const selectIsLoading = createSelector(getTodoState, (state: TodoStoreState) => state.isLoading)
export const selectTodos = createSelector(getTodoState, (state: TodoStoreState) => state.todos)
