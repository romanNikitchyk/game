import {combineReducers, legacy_createStore} from "redux";
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
  settings: appReducer,
})
//store
export const store = legacy_createStore(rootReducer)

// types
export type RootState = ReturnType<typeof store.getState>
//hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // Already knows that `dispatch` can accept a thunk

