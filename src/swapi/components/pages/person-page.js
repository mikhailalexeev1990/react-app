import {PersonDetails, PersonList} from "../sw-components";
import Row from "../row";
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class PersonPage extends Component {

    static defaultProps = {
        selectedItem: 5
    }

    static propTypes = {
        selectedItem: PropTypes.number
    }

    state = {
        selectedItem: this.props.selectedItem
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
