import ItemDetails, {Record} from "../item-details";
import React from "react";
import {withSwapiService} from "../hoc-helpers";

const SpeciesDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="name" label="Name"/>
            <Record field="eyeColors" label="Eye Colors"/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getSpecies,
        getImageUrl: swapiService.getSpeciesImage
    };
}

export default withSwapiService(SpeciesDetails, mapMethodsToProps);
