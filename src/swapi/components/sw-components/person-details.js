import ItemDetails, {Record} from "../item-details";
import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context";

const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>{
            ({getPerson, getPersonImage}) => {
                return (
                    <ItemDetails
                        itemId={itemId}
                        getData={getPerson}
                        getImageUrl={getPersonImage}
                    >
                        <Record field="gender" label="Gender"/>
                        <Record field="birthYear" label="Birth Year"/>
                        <Record field="eyeColor" label="Eye Color"/>
                    </ItemDetails>
                )
            }
        }
        </SwapiServiceConsumer>
    );
};

export default PersonDetails;