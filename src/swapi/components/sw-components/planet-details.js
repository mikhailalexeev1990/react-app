import ItemDetails, {Record} from "../item-details";
import React from "react";
import {withSwapiService} from "../hoc-helpers";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="name" label="Name"/>
            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    };
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);
