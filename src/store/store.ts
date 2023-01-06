import {applyMiddleware, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import { userReducer } from './userReducer.ts'

const rootReducer = combineReducers({
    currentUser: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

