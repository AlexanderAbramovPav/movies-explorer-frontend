import {UserAction, UserActionTypes, UserState} from "../types/user.ts";

const defaultState: UserState = {
    name: "",
    email: "",
    error: null
}

export const userReducer = (state = defaultState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.UPDATE_USER:
            return {...state, name: action.payload.name, email: action.payload.email}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}

