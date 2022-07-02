import ItemDetails, {Record} from "../item-details";
import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context";

const SpeciesDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getSpecies, getSpeciesImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getSpecies}
                            getImageUrl={getSpeciesImage}
                        >
                            <Record field="name" label="Name"/>
                            <Record field="eyeColors" label="Eye Colors"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};

export default SpeciesDetails;
