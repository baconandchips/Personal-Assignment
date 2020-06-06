import { FILTER_ALL } from './actionTypes'
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from './actionTypes'

const initialTodoState = {
    nextId: 2,
    data:
    {
        1: {
            content: 'This is a message',
            completed: false
        }
    }
}

export const messages = (state = initialMessageState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            return (
                {
                    ...state, // this gives us the pervious elements before our current one!
                    data: {
                        ...state.data,
                        [state.nextId]: {
                            completed: false,
                            content: action.payload.content
                        },
                    },

                    nextId: state.nextId + 1
                }
            )
        }
        case TOGGLE_MESSAGE: {
            console.log(action.payload)
            return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [action.payload.id]: {
                            ...state.data[action.payload.id],
                            completed: !(state.data[action.payload.id].completed)
                        }
                    }
                }
            )
        }

        default: {
            return state
        }
    }
}

export const visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.payload.filter
            })
        }

        default: {
            return state;
        }
    }
}