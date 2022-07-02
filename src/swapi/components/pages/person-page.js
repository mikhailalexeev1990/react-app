import {PersonDetails, PersonList} from "../sw-components";
import Row from "../row";
import React, {Component} from "react";

export default class PersonPage extends Component {
    state = {
        selectedItem: 1
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const {selectedItem} = this.state;

        return (
            <Row left={<PersonList onItemSelected={this.onItemSelected}/>}
                 right={<PersonDetails itemId={selectedItem}/>}
            />
        )
    }
}
