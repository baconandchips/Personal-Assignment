import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';

class Button extends React.Component {
    render() {
        return (<div>

            <ul className="message-list">
                {this.props.messages.map(message => {
                    return(
                        <li id={message.id} onClick={() => this.props.toggleHide()}>
                            <div>
                                {message.text}
                            </div>
                            <div class="hideable">
                                {message.hiddenText}
                            </div>
                        </li>
                    )
                })}
            </ul>
            <h1>The number is: {this.props.count}</h1>
            <button onClick={() => this.props.increment(5)}>Increment!</button>
            <button onClick={() => this.props.decrement(5)}>Decrement!</button>
            </div>)
    }
}

// State has entire state of app!!
const mapStateToProps = (state) => { //name is by convention
    return { count: state.count }; // now it will appear as props
}

export default connect(mapStateToProps, { increment, decrement })(Button);