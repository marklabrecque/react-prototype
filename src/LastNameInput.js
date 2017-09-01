import React, { Component } from 'react';

class LastNameInput extends Component {
    render() {
        return (
        <div className="last-name">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" onChange={this.props.onChangeLastName} name="lastName" value={this.props.lastName} />
        </div>
        );
    }
}

export default LastNameInput;