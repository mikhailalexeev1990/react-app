import React, {Component} from 'react';
import Header from "../header";
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";
import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import RandomPlanet from "../random-planet";
import {PersonPage, PlanetPage, SpeciesPage} from "../pages";

export default class SwapiApp extends Component {

    state = {
        error: false,
        swapiService: new SwapiService(),
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error: true})
    }

    render() {
        const {error, swapiService} = this.state;

        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService}>
                    <Header/>
                    <RandomPlanet/>
                    <PersonPage/>
                    <PlanetPage/>
                    <SpeciesPage/>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
