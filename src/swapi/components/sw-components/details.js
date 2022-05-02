import React from "react";
import ItemDetails, {Record} from "../item-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getSpecies,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
    getSpeciesImage
} = swapiService;

const PersonDetails = ({itemId}) => {
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
    );
};
const PlanetDetails = ({itemId}) => {
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
    );
};
const StarshipDetails = ({itemId}) => {
};
const SpeciesDetails = ({itemId}) => {
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

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    SpeciesDetails
};
