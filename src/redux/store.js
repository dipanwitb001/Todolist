import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../slicers/todoslicer.js'


export const store = configureStore({
    reducer : {
        todo : todoReducer
    },

    devTools: true,
})