import {PlanetDetails, PlanetList} from "../sw-components";
import Row from "../row";
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class PlanetPage extends Component {

    static defaultProps = {
        selectedItem: 3
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
            <Row left={<PlanetList onItemSelected={this.onItemSelected}/>}
                 right={<PlanetDetails itemId={selectedItem}/>}
            />
        )
    }
}
