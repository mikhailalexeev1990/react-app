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

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);
const SpeciesList = withData(ItemList, getAllSpecies);

export {
    PersonList,
    PlanetList,
    StarshipList,
    SpeciesList
};
