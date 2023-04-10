import {Todo} from "../../components/todo/todo-list/todo";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

export interface TodoStoreState extends EntityState<Todo> {
  isLoading: boolean,
  error: any
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({selectId: (item: Todo) => item.id})
export const initialState: TodoStoreState = adapter.getInitialState({isLoading: false, error: undefined});
