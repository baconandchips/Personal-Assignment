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
            dispatch(addMessageSuccess(message));
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const toggleMessageSuccess = (id) => (
    {
        type: TOGGLE_MESSAGE,
        payload: {
            id
        }
    }
)

export const toggleMessage = (message) => {
    return (dispatch) => {
        console.log("message inside toggle: ", message);
        console.log("message._id: ", message._id);
        axios.post(`http://localhost:5000/messages/update/${message._id}`, {
            "_id": Object(message._id),
            "messageID": Number(message.messageID),
            "content": String(message.content),
            "contentHidden": String(message.contentHidden),
            "showHidden": Boolean(!message.showHidden)
        })
        .then((res) => {
            console.log("toggle action is then'd");
            dispatch(toggleMessageSuccess(message.messageID));
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const setFilter = (filter) => (
    {
        type: SET_FILTER,
        payload: {
            filter
        }
    }
)