import React, {Component} from 'react';
import Header from "../header";
import ErrorIndicator from "../error-indicator";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import {PersonList, PlanetList, StarshipList, SpeciesList} from "../sw-components";
import {PersonDetails, PlanetDetails, StarshipDetails, SpeciesDetails} from "../sw-components";

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
            <ErrorBoundary>
                <Header/>
                <Row
                    left={
                        <PersonList>
                            {({name}) => <span>{name}</span>}
                        </PersonList>
                    }
                    right={
                        <PersonDetails itemId={1}/>
                    }
                />
                <Row
                    left={
                        <PlanetList>
                            {({name}) => <span>{name}</span>}
                        </PlanetList>
                    }
                    right={
                        <PlanetDetails itemId={4}/>
                    }
                />
            </ErrorBoundary>
        );
    }
}
