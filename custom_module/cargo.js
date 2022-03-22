class Cargo{

    constructor(name) {
        this.name=name;
        if (typeof name === 'undefined') { this.name = "Невідомий груз"; }
    }
}

function add_cargo(name, planet){
    let cargo = new Cargo(name);
    planet.cargo.push(cargo);
    return cargo;
}

function remove_cargo (name, planet) {

    let cargo = find_cargo(name, planet);

    if (cargo === -1) { return -1; }

    let id = planet.cargo.indexOf(cargo);
    planet.cargo.splice(id, 1);

    return 1;

}

function find_cargo (name, planet) {

    for (let i = 0; i < planet.cargo.length; i++) {

        let cargo = planet.cargo[i];

        if (name === cargo.name) { return cargo; }

    }

    return -1;

}

function edit_cargo (name, planet, new_name) {

    let cargo = find_cargo(name, planet);

    if (cargo === -1) { return -1; }

    let id = planet.cargo.indexOf(cargo);

    planet.cargo[id].name = new_name;

    return 1;

}

function get_cargos (planet) {

    console.log("\n" + `Список грузу на планеті ${planet.name}:`);

    for (let i = 0; i < planet.cargo.length; i++) {

        let cargo = planet.cargo[i];
        console.log(`\tГруз №${i+1} - ${cargo.name}`);

    }

    console.log();

    return planet.cargo;

}

// Експортуємо функції
exports.find_cargo = find_cargo;
exports.add_cargo = add_cargo;
exports.remove_cargo = remove_cargo;
exports.edit_cargo = edit_cargo;
exports.get_cargos = get_cargos;