import React, {Component} from "react";

export default class ThrowError extends Component {
    state = {
        error: false
    }

    render() {
        if (this.state.error) {
            throw new Error('Something was wrong!');
        }
        return (
            <React.Fragment>
                <button className="btn btn-danger" onClick={() => {
                    this.setState({error: true})
                }}>
                    Throw error
                </button>
            </React.Fragment>
        );
    }
}
