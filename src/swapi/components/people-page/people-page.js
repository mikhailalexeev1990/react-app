import React, {Component} from "react";
import './people-page.css';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import ThrowError from "../throw-error";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 4,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        const itemList = (
            <ErrorBoundary>
                <ItemList

                    onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople}
                >
                    {(i) => (`${i.name} (${i.gender}, ${i.birthYear})`)}
                </ItemList>
                <ThrowError/>
            </ErrorBoundary>
        );

        const personDetails = (
            <ErrorBoundary>
                <ItemDetails
                    personId={this.state.selectedPerson}
                />
                <ThrowError/>
            </ErrorBoundary>
        );

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}
