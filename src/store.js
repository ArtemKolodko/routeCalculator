import { observable, action, runInAction, toJS } from "mobx";
import Graph from 'node-dijkstra';
import { PricePerKm, AllStationIds, StationDistances } from "./constants";
import Station from "./entities/Station";

export default class AppState {
  @observable stationFrom = null;
  @observable stationTo = null;
  graph = new Graph();
  stations = [];

  constructor() {
    const stations = AllStationIds.map(id => {
      const neighbours = StationDistances.reduce((acc, item) => {
        const neighbours = {};
        const inList = item.stationIds.find(stationId => stationId === id);
        if (inList) {
          item.stationIds
              .filter(stationId => stationId !== id)
              .forEach(stationId => {
                neighbours[stationId] = item.distance
              })
        }
        return {
          ...acc,
          ...neighbours}
      }, {});
      return new Station(id, neighbours)
    });
    stations.forEach(({id, neighbours}) => this.graph.addNode(id, neighbours));
    this.stations = stations;
  }

  @action
  setStationFrom = stationId => {
    this.stationFrom = this.stations.find(station => station.id === stationId);
  };

  @action
  setStationTo = stationId => {
    this.stationTo = this.stations.find(station => station.id === stationId);
  };

  getStationsFromList = () => {
    return toJS(this.stations);
  };

  getStationsToList = () => {
    return toJS(this.stations);
  };

  getPathBetweenStations = () => {
    const from = this.stationFrom;
    const to = this.stationTo;

    let path = {
      resolved: false,
      route: [],
      distance: 0,
      price: 0
    };

    if (from && to) {
      const graphRoute = this.graph.path(this.stationFrom.id, this.stationTo.id);
      if (graphRoute) {
        const route = graphRoute.map(stationId => this.stations.find(station => station.id === stationId));
        const distance = route.reduce((acc, item, index, arr) => {
          if (index < arr.length - 1) {
            const nextStationId = arr[index + 1].id;
            const distance = item.neighbours[nextStationId];
            return acc + distance
          }
          return acc
        }, 0);
        const price = distance * PricePerKm;
        return {
          ...path,
          resolved: true,
          route,
          distance,
          price
        }
      }
    }
    return path
    }
}
