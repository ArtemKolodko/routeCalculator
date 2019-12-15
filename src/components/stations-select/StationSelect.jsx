import React from "react";
import { observer, inject } from "mobx-react";
import { Select } from "antd";

const { Option } = Select;

export default inject("appStore")(observer(({ appStore, placeholder, stations, onChange }) => {
    return (
        <Select
            showSearch
            placeholder={placeholder}
            optionFilterProp="children"
            style={{ width: 300 }}
            filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={onChange}
        >
            {stations.map(station => {
                const { id, name } = station;
                return (
                    <Option key={name} value={id}>
                        {name}
                    </Option>
                );
            })}
        </Select>
    );
}));