import React from "react";

import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { Provider } from "react-redux";
import "@styles/main.css";
import store from "./redux/store";
import axios from "axios";


axios.defaults.baseURL =
    import.meta.env.VITE_APP_API || "http://localhost:5000/api/v1";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <div className="app">
                <App />
            </div>
        </React.StrictMode>
    </Provider>
);
