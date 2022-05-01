class SwapiService {
    #apiBase = 'https://swapi.dev/api';

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
}

export default SwapiService;
