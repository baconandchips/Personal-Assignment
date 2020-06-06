import { ADD_MESSAGE, TOGGLE_MESSAGE, DELETE_MESSAGE, SET_FILTER } from './actionTypes'

export const addMessage = (content) => (
    {
        type: ADD_MESSAGE,
        payload: {
            content
        }
    }
)

export const toggleMessage = (id) => (
    {
        type: TOGGLE_MESSAGE,
        payload: {
            id
        }
    }
)

export const deleteMessage = (id) => (
    {
        type: SET-FILTER,
        payload: {
            filter
        }
    }
)