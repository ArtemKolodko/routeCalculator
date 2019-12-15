export default class Line {
  constructor(id, name, stations = []) {
    this.id = id;
    this.name = name;
    this.stations = stations;
  }
}
