const planet = require('./planet');
const station = require('./cosmic_station');
const cargo = require('./cargo');

exports.find_planet = planet.find_planet;
exports.add_planet = planet.add_planet;
exports.remove_planet = planet.remove_planet;
exports.edit_planet = planet.edit_planet;
exports.get_planets = planet.get_planets;

exports.find_station = station.find_station;
exports.add_station = station.add_station;
exports.remove_station = station.remove_station;
exports.edit_station = station.edit_station;
exports.get_stations = station.get_stations;

exports.find_cargo = cargo.find_cargo;
exports.add_cargo = cargo.add_cargo;
exports.remove_cargo = cargo.remove_cargo;
exports.edit_cargo = cargo.edit_cargo;
exports.get_cargos = cargo.get_cargos;