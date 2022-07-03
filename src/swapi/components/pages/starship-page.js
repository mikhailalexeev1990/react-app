import {StarshipDetails, StarshipList} from "../sw-components";
import Row from "../row";
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class StarshipPage extends Component {

    static defaultProps = {
        selectedItem: 1
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
            <Row left={<StarshipList onItemSelected={this.onItemSelected}/>}
                 right={<StarshipDetails itemId={selectedItem}/>}
            />
        )
    }
}
