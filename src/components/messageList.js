import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'
import { FILTER_ALL, FILTER_SHOWHIDDEN } from '../redux/actionTypes'
import { toggleMessage, getMessages } from '../redux/actions'
import Shrek from './shrek'

const Message = ({ message, id, toggleMessage }) => (
    <li className={message.showHidden ? 'showHidden' : ''} onClick={() => {
        toggleMessage(message);
        }}>
    {message.content}
    <Shrek hiddenText={message.contentHidden}></Shrek>
    </li>
)

function MessageList({ messages, toggleMessage, getMessages }) {
    
    useEffect(() => {
        getMessages();
    }, []);
    // mapstatetoprops mapdispatchtoprops
    // line 25 is just props
    
    return (
        _.keys(messages).map((id) => (
            <Message key={id} id={id} toggleMessage={toggleMessage} message={messages[id]} />
        ))
    )
}

function grabDataFromBackend(props) {
    props.getMessages();
}

const mapState = (state) => {
    if(state.visibilityFilter.activeFilter === FILTER_ALL) {
        return { messages: state.messages }
    } else if(state.visibilityFilter.activeFilter === FILTER_SHOWHIDDEN) {
        return ({
            messages: _.pick(state.messages, (message) => message.showHidden)
        })
    } else {
        return ({
            messages: _.pick(state.messages, (message) => !message.showHidden)
        })
    }
}

export default connect(mapState, { toggleMessage, getMessages })(MessageList)
// 