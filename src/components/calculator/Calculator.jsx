import React from "react";
import {inject, observer} from "mobx-react";
import StationSelect from '../stations-select'
import Results from '../results'
import './Calculator.less'

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
           <Results
               path={path}
               stationFrom={stationFrom}
               stationTo={stationTo}
           />
        </div>
    </div>
}));
