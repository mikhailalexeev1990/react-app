import React from "react";
import ItemList from "../item-list";
import {withData, withSwapiService} from "../hoc-helpers";

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

const mapPersonMethodsToProps = (swapiService) => ({getData: swapiService.getAllPeople})
const mapPlanetMethodsToProps = (swapiService) => ({getData: swapiService.getAllPlanets})
const mapStarshipMethodsToProps = (swapiService) => ({getData: swapiService.getAllStarships})
const mapSpeciesMethodsToProps = (swapiService) => ({getData: swapiService.getAllSpecies})

const PersonList = withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapPersonMethodsToProps
);
const PlanetList = withSwapiService(
    withData(withChildFunction(ItemList, renderNameAndClimate)),
    mapPlanetMethodsToProps
);
const StarshipList = withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapStarshipMethodsToProps
);
const SpeciesList = withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapSpeciesMethodsToProps
);

export {
    PersonList,
    PlanetList,
    StarshipList,
    SpeciesList
};
