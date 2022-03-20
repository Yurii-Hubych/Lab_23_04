class Cosmic_Station{

    constructor(name) {
        this.name=name;
        if (typeof name === 'undefined') { this.name = "Невідома станція"; }
    }
}

function add_station(name, planet){
    let station = new Cosmic_Station(name);
    planet.stations.push(station);
    return station;
}

function remove_station (name, planet) {

    let station = find_station(name, planet);

    if (station === -1) { return -1; }

    let id = planet.stations.indexOf(station);
    planet.stations.splice(id, 1);

    return 1;

}

function find_station (name, planet) {

    for (let i = 0; i < planet.stations.length; i++) {

        let station = planet.stations[i];

        if (name === station.name) { return station; }

    }

    return -1;

}

function edit_station (name, planet, new_name) {

    let station = find_station(name, planet);

    if (station === -1) { return -1; }

    let id = planet.stations.indexOf(station);

    planet.stations[id].name = new_name;

    return 1;

}

function get_stations (planet) {

    console.log("\n" + `Список усіх станцій ${planet.name}:`);

    for (let i = 0; i < planet.stations.length; i++) {

        let station = planet.stations[i];
        console.log(`\tНазва станції: ${station.name}`);

    }

    console.log();

    return planet.stations;

}

// Експортуємо функції
exports.find_station = find_station;
exports.add_station = add_station;
exports.remove_station = remove_station;
exports.edit_station = edit_station;
exports.get_stations = get_stations;