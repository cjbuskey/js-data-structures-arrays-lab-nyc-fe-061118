// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}
function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}
function destructivelyRemoveLastDriver(name) {
  drivers.pop();
}
function destructivelyRemoveFirstDriver(name) {
  drivers.shift();
}
function appendDriver(name) {
  randomName = drivers.slice();
  randomName.push(name);
  return randomName;
}
function prependDriver(name) {
  randomName = drivers.slice();
  randomName.unshift(name);
  return randomName;
}
function removeLastDriver(name) {
  randomName = drivers.slice();
  randomName.pop(name);
  return randomName;
}
function removeFirstDriver(name) {
  randomName = drivers.slice();
  randomName.shift(name);
  return randomName;
}