import { FILTER_ALL } from './actionTypes'
import { ADD_MESSAGE, TOGGLE_MESSAGE, SET_FILTER } from './actionTypes'

const initialMessageState = {
    nextId: 2,
    data:
    {
        1: {
            content: 'This is a message',
            contentHidden: 'Shrek',
            showHidden: false
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
                            showHidden: false,
                            content: action.payload.content.value,
                            contentHidden: action.payload.content.valueHidden
                        },
                    },

                    nextId: state.nextId + 1
                }
            )
        }
        case TOGGLE_MESSAGE: {
            console.log(action.payload)
            console.log(state.data[action.payload.id].showHidden)
            return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [action.payload.id]: {
                            ...state.data[action.payload.id],
                            showHidden: !(state.data[action.payload.id].showHidden)
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