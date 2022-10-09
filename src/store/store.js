import React from 'react'
import { createStore, combineReducers } from 'redux'
import { userReducer } from './userReducer.js'
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    currentUser: userReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())

