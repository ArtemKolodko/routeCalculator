import { StationNames } from "../constants";

export default class Station {
  constructor(id, neighbours) {
    this.id = id;
    this.name = StationNames[id];
    this.neighbours = neighbours;
  }
}
