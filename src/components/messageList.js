import React from 'react'
import { connect } from 'react-redux'
import { _ } from 'underscore'
import { FILTER_ALL, FILTER_COMPLETED } from '../redux/actionTypes'
import { toggleMessage } from '../redux/actions'
import { toUnicode } from 'punycode';

const Message = ({ message, id, toggleMessage }) => (
    <li className={message.completed ? 'completed' : ''} onClick={() => toggleMessage(id)}>{message.content}</li>
)

export default function MessageList({ messages, toggleMessage }) {
    return (
        _.keys(messages).map((id) => (
            <Message key={id} id={id} toggleMessage={toggleMessage} message={messages[id]} />
        ))
    )
}

const mapState = (state) => {
    if(state.visibilityFilter.activeFilter === FILTER_ALL) {
        return { messages: state.messages.data }
    } else if(state.visibilityFilter.activeFilter === FILTER_COMPLETED) {
        return ({
            messages: _.pick(state.messages.data, (message) => message.completed)
        })
    } else {
        return ({
            messages: _.pick(state.messages.data, (message) => !message.completed)
        })
    }
}

export default connect(mapState, { toggleMessage })(MessageList)