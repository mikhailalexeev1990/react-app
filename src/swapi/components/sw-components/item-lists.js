import React from "react";
import ItemList from "../item-list";
import {withData} from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships,
    getAllSpecies
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    };
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndClimate = ({name, climate}) => <span>{name} ({climate})</span>;

const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getAllPeople
);
const PlanetList = withData(
    withChildFunction(ItemList, renderNameAndClimate),
    getAllPlanets
);
const StarshipList = withData(
    withChildFunction(ItemList, renderName),
    getAllStarships
);
const SpeciesList = withData(
    withChildFunction(ItemList, renderName),
    getAllSpecies
);

export {
    PersonList,
    PlanetList,
    StarshipList,
    SpeciesList
};
