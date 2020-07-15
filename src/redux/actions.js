import { ADD_MESSAGE, TOGGLE_MESSAGE, SET_FILTER } from './actionTypes'
import axios from 'axios';

export const getMessagesSuccess = (messages) => ({
    type: 'GET_MESSAGES',
    payload: {
        messages
    }
})

export const getMessages = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/messages/')
    .then(response => {
        console.log("Got data from backend");
        console.log("response: ", response.data);
        dispatch(getMessagesSuccess(response.data));
    })
    .catch((error) => {
        console.log(error);
    })
    }
}

export const addMessageSuccess = (content) => (
    {
        type: ADD_MESSAGE,
        payload: {
            content
        }
    }
)

export const addMessage = (message) => {
    return (dispatch) => {
        axios.put('http://localhost:5000/messages/add', {
            "messageID": Number(message.number),
            "content": String(message.content),
            "contentHidden": String(message.contentHidden),
            "showHidden": Boolean(false)
        })
        .then((res) => {
            addMessageSuccess(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

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