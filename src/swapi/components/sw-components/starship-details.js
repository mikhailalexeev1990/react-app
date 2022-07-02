import ItemDetails, {Record} from "../item-details";
import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context";

const StarshipDetails = () => {
    return (
        <ItemDetails>
            <SwapiServiceConsumer>
                {
                    () => {
                        return (
                            <div>
                                empty
                            </div>
                        )
                    }
                }
            </SwapiServiceConsumer>
        </ItemDetails>
    );
};

export default StarshipDetails;
