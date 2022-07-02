import React, {Component} from 'react';
import Header from "../header";
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";
import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";

import {PersonPage, PlanetPage, SpeciesPage, StarshipPage} from "../pages";

export default class SwapiApp extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService(),
        personId: 1,
        planetId: 4,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const {swapiService} = this.state;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService}>
                    <Header/>
                    <PersonPage/>
                    <PlanetPage/>
                    <SpeciesPage/>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
