import React from "react";
import ReactDOM from "react-dom";

// Redux 모듈
import store from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

// Router
import { BrowserRouter, Route} from "react-router-dom";

// Containers
import * as Containers from "./containers";

// tailwindcss
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Route exact path="/"><Containers.NavigationBar /><Containers.MainIntroduction /></Route>
        <Route path="/service/info"><Containers.ServiceInformaion /></Route>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
