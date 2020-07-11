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
        // addMessage({value, valueHidden})
        console.log("messages: " + messages);
        let number = 6; // messages.length; // TODO: FIX, THIS SHOULD NOT BE HERE
        // add in axios double nested call, 1 for PUT and 1 for GET
        addMessage({
            content: value,
            contentHidden: valueHidden,
            number,
        });
        number++;
        // .then(addMessage({value, valueHidden}));
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
    return { messages: state.messages.data }
}

// Connect action to the thing we're exporting right now
export default connect(mapState, { addMessage })(AddMessage)