export interface UserState {
    name: string;
    email: string;
    error: string | null;
}

export enum UserActionTypes {
    UPDATE_USER = "UPDATE_USER",
    UPDATE_USER_ERROR = "UPDATE_USER_ERROR"
}

interface UpdateUsersAction {
    type: UserActionTypes.UPDATE_USER;
    payload: UserState;
}

interface UpdateUserErrorAction {
    type: UserActionTypes.UPDATE_USER;
    payload: string;
}

export type UserAction = UpdateUsersAction | UpdateUserErrorAction