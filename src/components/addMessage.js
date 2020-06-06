import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../redux/actions'

function AddMessage({ addMessage }) {
    const [value, setValue] = useState('');

    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    const handleAdd = () => {
        setValue('')
        addMessage(value)
    }
    
    return (
        <>
            <input type="text" onChange={handleOnChange} value={value} placeholder="type here" />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}

// Connect action to the thing we're exporting right now
export default connect(null, { addMessage })(AddMessage)