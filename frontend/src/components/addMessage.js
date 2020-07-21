import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addMessage, getMessages } from '../redux/actions'

function AddMessage({ messages, addMessage }) {

    useEffect(() => {
        getMessages();
    }, []);

    const handleAdd = () => {
        let value = document.getElementById("regularText").value
        let valueHidden = document.getElementById("hiddenText").value
        console.log(value)
        console.log("valueHidden: ", valueHidden)
        console.log("messages: ", messages);
        let number = messages.length+1;
        addMessage({
            content: value,
            contentHidden: valueHidden,
            number: number,
        });
    }
    
    return (
        <>
            <input type="text" id="regularText" placeholder="type here" />
            <input type="text" id="hiddenText" placeholder="hidden text" />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}

const mapState = (state) => {
    // Give data
    console.log("state: ");
    console.log(state);
    return { messages: state.messages }
}

// Connect action to the thing we're exporting right now
export default connect(mapState, { addMessage })(AddMessage)