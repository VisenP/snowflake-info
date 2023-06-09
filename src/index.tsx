import "./globals.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);
