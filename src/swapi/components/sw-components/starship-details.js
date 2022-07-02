import ItemDetails, {Record} from "../item-details";
import React from "react";
import {withSwapiService} from "../hoc-helpers";

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            empty
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {};
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);
