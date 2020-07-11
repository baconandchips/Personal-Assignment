import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'
import axios from 'axios'
import { FILTER_ALL, FILTER_SHOWHIDDEN } from '../redux/actionTypes'
import { toggleMessage, getMessages } from '../redux/actions'
import Shrek from './shrek'

const Message = ({ message, id, toggleMessage }) => (
    <li className={message.showHidden ? 'showHidden' : ''} onClick={() => {
        toggleMessage(id);
        console.log("Message is toggled");
        axios.put('http://localhost:5000/messages/add', {
            "messageID": Number(id),
            "content": String(message.content),
            "contentHidden": String(message.contentHidden),
            "showHidden": Boolean(!message.showHidden)
        })
        }}>
    {message.content}
    <Shrek hiddenText={message.contentHidden}></Shrek>
    </li>
)

function MessageList({ messages, toggleMessage }) {
    useEffect(() => {
        getMessages();
    }, []);
    
    return (
        _.keys(messages).map((id) => (
            <Message key={id} id={id} toggleMessage={toggleMessage} message={messages[id]} />
        ))
    )
}

const mapState = (state) => {
    if(state.visibilityFilter.activeFilter === FILTER_ALL) {
        return { messages: state.messages.data }
    } else if(state.visibilityFilter.activeFilter === FILTER_SHOWHIDDEN) {
        return ({
            messages: _.pick(state.messages.data, (message) => message.showHidden)
        })
    } else {
        return ({
            messages: _.pick(state.messages.data, (message) => !message.showHidden)
        })
    }
}

export default connect(mapState, { toggleMessage, getMessages })(MessageList)