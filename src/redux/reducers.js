import { FILTER_ALL } from './actionTypes'
import { ADD_MESSAGE, TOGGLE_MESSAGE, SET_FILTER } from './actionTypes'
import axios from 'axios';

// Not useful rn
const getInitialData = axios.get('http://localhost:5000/messages/')
    .then(response => {
        // console.log("Got data from backend");
        initialMessageState.data = response.data;
        initialMessageState.nextId = response.data.length + 1;
    })
    .catch((error) => {
        console.log(error);
    })

const initialMessageState = getInitialData;

// Useful
// export const getMessages = (state, action) => {
//     switch (action.type) {
//         case 'GET_MESSAGES':
//             return action.messages;
//         default:
//             return state;
//     }
// }

/*{
    nextId: 3,
    data:
    [
        {
            messageID: 1,
            content: 'This is a message',
            contentHidden: 'Shrek',
            showHidden: false
        },
        {
            messageID: 2,
            content: 'This is a message 2',
            contentHidden: 'Shrekerinos',
            showHidden: false
        }
    ]
}*/

export const messages = (state = getInitialData, action) => {
    switch(action.type) {
        case 'GET_MESSAGES':
            return action.messages;
        case ADD_MESSAGE: {
            console.log("Add message reducer state: ", state);
            console.log("Add message reducer action: ", action);
            return (
                {
                    ...state, // this gives us the pervious elements before our current one!
                    data: [
                        ...state.data,
                        {
                            messageID: action.payload.content.number,
                            // Array of info stored inside content
                            content: action.payload.content.content,
                            contentHidden: action.payload.content.contentHidden,
                            showHidden: false,
                        },
                    ],

                    nextId: state.nextId + 1
                }
            )
        }
        case TOGGLE_MESSAGE: {
            console.log(state.data[action.payload.id].showHidden);
            let changeState = state.data;
            for (let i=0; i<changeState.length; ++i) {
                // console.log(changeState[i]);
                // console.log("needed ID: " +  parseInt(action.payload.id));
                // console.log("messageID: " +  changeState[i].messageID);
                if (changeState[i].messageID - 1 === (parseInt(action.payload.id))) {
                    // console.log("I'm in");
                    changeState[i].showHidden = !changeState[i].showHidden;
                    break;
                }
            }
            return (
                {
                    ...state,
                    data: [ ...changeState ]
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