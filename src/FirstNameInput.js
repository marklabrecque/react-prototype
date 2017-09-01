import React, { Component } from 'react';

class FirstNameInput extends Component {
    render() {
        return (
        <div className="first-name">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" onChange={this.props.onChangeFirstName} name="firstName" value={this.props.firstName} />
        </div>
        );
    }
}

export default FirstNameInput;