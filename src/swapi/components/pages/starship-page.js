import {StarshipDetails, StarshipList} from "../sw-components";
import Row from "../row";
import React, {Component} from "react";

export default class StarshipPage extends Component {
    state = {
        selectedItem: 1
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const {selectedItem} = this.state;

        return (
            <Row left={<StarshipList onItemSelected={this.onItemSelected}/>}
                 right={<StarshipDetails itemId={selectedItem}/>}
            />
        )
    }
}
