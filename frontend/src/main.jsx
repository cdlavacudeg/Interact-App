import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './routes/App'
import { Provider } from "react-redux";
import '@styles/main.css'
import store from './redux/store'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

<<<<<<< HEAD
=======
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="app">
      <App />
    </div>
  </React.StrictMode>
)
>>>>>>> b1880d812c0ed91f22e3e5620ae7591a7e601e8e
