import { ADD_MESSAGE, TOGGLE_MESSAGE, SET_FILTER } from './actionTypes'

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

export const setFilter = (filter) => (
    {
        type: SET_FILTER,
        payload: {
            filter
        }
    }
)