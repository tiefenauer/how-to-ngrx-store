import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TodoStoreState} from "./todo.state";
import {TODO_FEATURE_NAME} from "./todo.reducer";

const selectTodoState = createFeatureSelector<TodoStoreState>(TODO_FEATURE_NAME);

export const selectIsLoading = createSelector(selectTodoState, (state: TodoStoreState) => state.isLoading)
export const selectTodos = createSelector(selectTodoState, (state: TodoStoreState) => state.todos)

export const selectSelectedTodo = createSelector(selectTodos, (todos) => todos.find(todo => todo.selected))
