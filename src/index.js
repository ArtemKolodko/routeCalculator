import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import AppStore from "./store";
import Calculator from "./components/calculator";
import {Provider} from "mobx-react";
import "antd/dist/antd.css";

render(
  <div>
      <Provider  appStore={new AppStore()} >
          <Calculator />
      </Provider>
    <DevTools />
  </div>,
  document.getElementById("root")
);
