import React from "react";
import { Table } from "antd";

const TableKeys = {
    stationsCount: 'stationsCount',
    stationsList: 'stationsList',
    distance: 'distance',
    price: 'price'
};

export default (props) => {
    const {path: {resolved, route, distance, price}, stationFrom, stationTo} = props;
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
    const stationsList = route
        .map(({name}) => name)
        .join(' ⟶ ');

    const columns = [{
        title: 'Количество станций',
        dataIndex: TableKeys.stationsCount,
        key: TableKeys.stationsCount,
    }, {
        title: 'Путь',
        dataIndex: TableKeys.stationsList,
        key: TableKeys.stationsList,
    }, {
        title: 'Расстояние (км)',
        dataIndex: TableKeys.distance,
        key: TableKeys.distance
    }, {
        title: 'Цена (руб.)',
        dataIndex: TableKeys.price,
        key: TableKeys.price
    }];

    const dataSource = [{
        key: TableKeys.stationsCount,
        [TableKeys.stationsCount]: route.length,
        [TableKeys.stationsList]: stationsList,
        [TableKeys.distance]: distance,
        [TableKeys.price]: price
    }];

    return <Table
        size={'middle'}
        pagination={false}
        dataSource={dataSource}
        columns={columns}
    />;
}