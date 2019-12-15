import React from "react";
import {inject, observer} from "mobx-react";
import StationSelect from '../stations-select'
import './Calculator.less'

function Results (props) {
    const {path: {resolved, route, distance}, stationFrom, stationTo} = props;
    if (stationFrom && stationTo) {
        if(stationFrom.id === stationTo.id) {
            return <div>Станции отправления и назначения совпадают</div>
        }
        if (!resolved) {
            return <div>Путь не построен</div>
        }
    } else {
        return <div>Выберите станцию отправления и назначения</div>
    }
    const routeDetailed = route
        .map(({name}) => name)
        .join(' ⟶ ');
    return <div>
        <div>{routeDetailed}</div>
        <div>Расстояние: {distance} км</div>
    </div>
}

export default inject("appStore")(observer(({ appStore }) => {
    const {
        stationFrom, stationTo,
        getStationsFromList, getStationsToList,
        setStationFrom, setStationTo,
        getPathBetweenStations
    } = appStore;
    const stationsFromList = getStationsFromList();
    const stationsToList = getStationsToList();
    const path = getPathBetweenStations();
    return <div className={'calc'}>
        <div className={'calc__stations'}>
            <StationSelect
                placeholder="Выберите станцию отправления"
                stations={stationsFromList}
                onChange={setStationFrom}
            />
            <StationSelect
                placeholder="Выберите станцию назначения"
                stations={stationsToList}
                onChange={setStationTo}
            />
        </div>
        <div className={'calc__results'}>
           <Results path={path} stationFrom={stationFrom} stationTo={stationTo} />
        </div>
    </div>
}));
