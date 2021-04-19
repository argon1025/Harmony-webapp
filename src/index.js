import React from "react";
import ReactDOM from "react-dom";

// Redux 모듈
import store from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

//Redux Persist
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// Router
import { BrowserRouter, Route} from "react-router-dom";

// Containers
import * as Containers from "./containers";

// tailwindcss
import './index.css';

const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter basename="/">
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Route exact path="/"><Containers.NavigationBar /><Containers.MainIntroduction /><Containers.FooterBar /></Route>
        <Route exact path="/service/info"><Containers.ServiceInformaion /></Route>
        <Route exact path="/kakao/auth"><Containers.KakaoLogin /></Route>
      </React.StrictMode>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
