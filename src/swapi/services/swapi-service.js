export default class SwapiService {
    #apiBase = 'https://swapi.dev/api';
    #imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const res = await fetch(`${this.#apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    getAllPeople = async () => {
        const res = await this.getResource('/people/');

        return res.results.map((person) => this.#transformPerson(person));
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);

        return this.#transformPerson(person);

    }

    getAllPlanets = async () => {
        const res = await this.getResource('/planets/');

        return res.results.map((planet) => this.#transformPlanet(planet));
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);

        return this.#transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResource('/starships/');

        return res.results.map((starship) => this.#transformStarship(starship));
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);

        return this.#transformStarship(starship);
    }

    getAllSpecies = async () => {
        const res = await this.getResource('/species/');

        return res.results.map((starship) => this.#transformSpecies(starship));
    }

    getSpecies = async (id) => {
        const species = await this.getResource(`/species/${id}/`);

        return this.#transformSpecies(species);
    }

    getPersonImage = ({id}) => {
        return `${this.#imageBase}/characters/${id}.jpg`;
    }

    getStarshipImage = ({id}) => {
        return `${this.#imageBase}/starships/${id}.jpg`;
    }

    getPlanetImage = ({id}) => {
        return `${this.#imageBase}/planets/${id}.jpg`;
    }

    getSpeciesImage = ({id}) => {
        return `${this.#imageBase}/species/${id}.jpg`;
    }

    #extractId(item) {
        return item.url.match(/\/(\d*)\/$/)[1];
    }

    #transformPerson(person) {
        return {
            id: this.#extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    }

    #transformPlanet(planet) {
        return {
            id: this.#extractId(planet),
            name: planet.name,
            climate: planet.climate,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    #transformStarship(starship) {
        return {
            id: this.#extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costItCredits: starship.cost_it_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
        }
    }

    #transformSpecies(species) {
        return {
            id: this.#extractId(species),
            name: species.name,
            classification: species.classification,
            designation: species.designation,
            averageHeight: species.average_height,
            skinColors: species.skin_colors,
            hairColors: species.hair_colors,
            eyeColors: species.eye_colors,
            averageLifespan: species.average_lifespan,
            homeworld: species.homeworld,
            language: species.language,
        }
    }
}
