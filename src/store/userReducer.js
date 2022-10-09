import React from "react";

const defaultState = {}

export const UPDATE_USER = "UPDATE_USER"

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {...state, name: action.payload.name, email: action.payload.email}
        default:
            return state
    }
}

export const updateCurrentUser = (payload) => ({type: UPDATE_USER, payload})