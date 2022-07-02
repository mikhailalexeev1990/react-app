import ItemDetails, {Record} from "../item-details";
import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context";

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}
                        >
                            <Record field="name" label="Name"/>
                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};

export default PlanetDetails;
