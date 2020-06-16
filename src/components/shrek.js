import React from 'react'

const Shrek = (props) => {
    return (
        <div className="Shrek">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png" alt="Shrek"></img>
            <p>{props.hiddenText}</p>
        </div>
        
    )
}

export default Shrek