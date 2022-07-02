import {SpeciesDetails, SpeciesList} from "../sw-components";
import Row from "../row";
import React, {Component} from "react";

export default class SpeciesPage extends Component {
    state = {
        selectedItem: 1
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const {selectedItem} = this.state;

        return (
            <Row left={<SpeciesList onItemSelected={this.onItemSelected}/>}
                 right={<SpeciesDetails itemId={selectedItem}/>}
            />
        )
    }
}
