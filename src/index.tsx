import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";

import App from "App";
import { store } from "store";
import { globalStyle } from "style/global";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={globalStyle} />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
