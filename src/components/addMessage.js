import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../redux/actions'

function AddMessage({ addMessage }) {

    const handleAdd = () => {
        let value = document.getElementById("regularText").value
        let valueHidden = document.getElementById("hiddenText").value
        console.log(value)
        console.log("valueHidden: ", valueHidden)
        addMessage({value, valueHidden})
    }
    
    return (
        <>
            <input type="text" id="regularText" placeholder="type here" />
            <input type="text" id="hiddenText" placeholder="hidden text" />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}

// Connect action to the thing we're exporting right now
export default connect(null, { addMessage })(AddMessage)