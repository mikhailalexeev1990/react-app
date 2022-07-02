import ItemDetails, {Record} from "../item-details";
import React from "react";
import {withSwapiService} from "../hoc-helpers";

const SpeciesDetails = ({itemId, swapiService}) => {
    const {getSpecies, getSpeciesImage} = swapiService;
    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getSpecies}
                            getImageUrl={getSpeciesImage}
                        >
                            <Record field="name" label="Name"/>
                            <Record field="eyeColors" label="Eye Colors"/>
                        </ItemDetails>
    );
};

export default withSwapiService(SpeciesDetails);
