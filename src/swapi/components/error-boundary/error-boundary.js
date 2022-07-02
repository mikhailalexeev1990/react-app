import React, {Component} from "react";
import './error-boundary.css';
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends Component {
    state = {
        error: false,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error: true})
    }

    render() {
        const {error} = this.state;
        const {children} = this.props;

        if (error) {
            return <ErrorIndicator/>;
        }

        return children;
    }
}
