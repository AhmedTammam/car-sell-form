import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";
import { Provider } from "react-redux";

import App from "App";
import { store } from "store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
          }
          ,
          p {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
