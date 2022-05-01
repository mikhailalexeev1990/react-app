import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

export default class SwapiApp extends Component {

    state = {
        hasError: false,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
            </div>
        );
    }
}
