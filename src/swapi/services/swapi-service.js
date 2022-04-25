class SwapiService {
    #apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this.#apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource('/people/');

        return res.results.map((person) => this.#transformPerson(person));
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);

        return this.#transformPerson(person);

    }

    async getAllPlanets() {
        const res = await this.getResource('/planets/');

        return res.results.map((planet) => this.#transformPlanet(planet));
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);

        return this.#transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResource('/starships/');

        return res.results.map((starship) => this.#transformStarship(starship));
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}/`);

        return this.#transformStarship(starship);
    }

    #extractId(item) {
        const idRegex = /\/(\d*)\/$/;
        return item.url.match(idRegex)[1];
    }

    #transformPerson(person) {
        return {
            id: this.#extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor,
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
            costItCredits: starship.costItCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    }
}

export default SwapiService;
