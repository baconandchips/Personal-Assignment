import { FILTER_ALL } from './actionTypes'
import { ADD_MESSAGE, TOGGLE_MESSAGE, SET_FILTER } from './actionTypes'

export const messages = (state = [], action) => {
    switch (action.type) {
        case 'GET_MESSAGES':
            console.log("Initial Get Message: ", action.payload.messages);
            return action.payload.messages;
        case ADD_MESSAGE: {
            console.log("Add message reducer state: ", state);
            console.log("Add message reducer action: ", action);
            return (
                [
                    ...state, // this gives us the pervious elements before our current one!
                    {
                        messageID: action.payload.content.number,
                        // Array of info stored inside content
                        content: action.payload.content.content,
                        contentHidden: action.payload.content.contentHidden,
                        showHidden: false,
                    },
                ]
            )
        }
        case TOGGLE_MESSAGE: {
            // console.log("Toggle message reducer state: ", state);
            // console.log("Toggle message reducer action: ", action);
            for (let i = 0; i < state.length; ++i) {
                // console.log("needed ID: " +  parseInt(action.payload.id));
                // console.log("messageID: " +  state[i].messageID);
                
                if (state[i].messageID === (parseInt(action.payload.id))) {
                    state[i].showHidden = !state[i].showHidden;
                    break;
                }
            }
            return (
                [
                    ...state
                ]
            )
        }

        default: {
            return state
        }
    }
}

export const visibilityFilter = (state = { activeFilter: FILTER_ALL }, action) => {
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