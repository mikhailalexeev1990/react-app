import React, {Component} from 'react';
import Header from "../header";
import ErrorIndicator from "../error-indicator";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import {PersonList, PlanetList, StarshipList, SpeciesList} from "../sw-components";
import {PersonDetails, PlanetDetails, StarshipDetails, SpeciesDetails} from "../sw-components";
import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";

export default class SwapiApp extends Component {
    swapiService = new SwapiService();

    state = {
        hasError: false,
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

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <Header/>
                    <Row left={<PersonList onItemSelected={(personId) => this.setState({personId})}/>}
                         right={<PersonDetails itemId={this.state.personId}/>}
                    />
                    <Row left={<PlanetList onItemSelected={(planetId) => this.setState({planetId})}/>}
                         right={<PlanetDetails itemId={this.state.planetId}/>}
                    />
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
