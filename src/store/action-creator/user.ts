import {UserAction, UserActionTypes} from "../../types/user.ts";
import {Dispatch} from "redux";

export const updateCurrentUser = (payload) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            await dispatch({type: UserActionTypes.UPDATE_USER, payload})
        }
        catch (e) {
            dispatch({type: UserActionTypes.UPDATE_USER_ERROR, payload: 'There is a mistake with updating the information'})
        }
        
    }
}
