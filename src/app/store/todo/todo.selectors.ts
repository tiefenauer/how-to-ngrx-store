import {createFeatureSelector, createSelector} from "@ngrx/store";
import {adapter, TodoStoreState} from "./todo.state";
import {TODO_FEATURE_NAME} from "./todo.reducer";

const selectTodoState = createFeatureSelector<TodoStoreState>(TODO_FEATURE_NAME);

export const {selectAll} = adapter.getSelectors();
export const selectIsLoading = createSelector(selectTodoState, (state: TodoStoreState) => state.isLoading)
export const selectTodos = createSelector(selectTodoState, selectAll)

export const selectSelectedTodo = createSelector(selectTodos, (todos) => todos.find(todo => todo.selected))
