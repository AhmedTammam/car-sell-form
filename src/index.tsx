import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";

import App from "App";

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById("root")
);
