export const StationIds = {
  spb: "spb",
  moscow: "moscow",
  rostov: "rostov",
  krasnodar: "krasnodar",
  smolensk: "smolensk",
  nnovgorod: "nnovgorod",
  ekateriburg: "ekateriburg"
};

export const AllStationIds = Object.keys(StationIds);

export const StationNames = {
  [StationIds.spb]: "Санкт-Петербург",
  [StationIds.moscow]: "Москва",
  [StationIds.rostov]: "Ростов",
  [StationIds.krasnodar]: "Краснодар",
  [StationIds.smolensk]: "Смоленск",
  [StationIds.nnovgorod]: "Нижний Новгород",
  [StationIds.ekateriburg]: "Екатеринбург"
};

export const StationDistances = [{
  stationIds: [StationIds.spb, StationIds.moscow],
  distance: 800
}, {
  stationIds: [StationIds.moscow, StationIds.smolensk],
  distance: 700
}, {
  stationIds: [StationIds.moscow, StationIds.nnovgorod],
  distance: 900
}, {
  stationIds: [StationIds.moscow, StationIds.rostov],
  distance: 1200
}, {
  stationIds: [StationIds.rostov, StationIds.krasnodar],
  distance: 1000
}, {
  stationIds: [StationIds.nnovgorod, StationIds.ekateriburg],
  distance: 1500
}];
