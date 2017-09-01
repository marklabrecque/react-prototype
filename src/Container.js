import React, { Component } from 'react';
import FirstNameInput from './FirstNameInput';
import LastNameInput from './LastNameInput';

class Container extends Component {
    constructor(props) {
        super(props);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.state = {firstName: '', lastName: ''};
    }
    render() {
        return (
            <div className="app-wrapper">
                <div className="parent-display">
                    <span className="firstName">{this.state.firstName}</span>&nbsp;
                    <span className="lastName">{this.state.lastName}</span>
                </div>
                <div className="inputs">
                    <FirstNameInput onChangeFirstName={this.handleChangeFirstName} />
                    <LastNameInput onChangeLastName={this.handleChangeLastName} />
                </div>
            </div>            
        );
    }
    handleChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    handleChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }
}

export default Container;