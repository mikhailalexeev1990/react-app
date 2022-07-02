import React from "react";
import {composeList} from "../hoc-helpers";

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndClimate = ({name, climate}) => <span>{name} ({climate})</span>;

const mapPersonMethodsToProps = (swapiService) => ({getData: swapiService.getAllPeople})
const mapPlanetMethodsToProps = (swapiService) => ({getData: swapiService.getAllPlanets})
const mapStarshipMethodsToProps = (swapiService) => ({getData: swapiService.getAllStarships})
const mapSpeciesMethodsToProps = (swapiService) => ({getData: swapiService.getAllSpecies})

const PersonList = composeList(renderName, mapPersonMethodsToProps);
const PlanetList = composeList(renderNameAndClimate, mapPlanetMethodsToProps);
const StarshipList = composeList(renderName, mapStarshipMethodsToProps);
const SpeciesList = composeList(renderName, mapSpeciesMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList,
    SpeciesList
};
