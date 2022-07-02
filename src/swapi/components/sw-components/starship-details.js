import ItemDetails, {Record} from "../item-details";
import React from "react";
import {withSwapiService} from "../hoc-helpers";

const StarshipDetails = ({itemId, swapiService}) => {
    return (
        <ItemDetails>
            empty
        </ItemDetails>
    );
};

export default withSwapiService(StarshipDetails);
