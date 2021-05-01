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
        <Containers.CautionModal />
        <Route exact path="/"><Containers.NavigationBar /><Containers.MainIntroduction /><Containers.FooterBar /></Route>
        <Route exact path="/service/info"><Containers.ServiceInformaion /></Route>
        <Route exact path="/kakao/auth"><Containers.KakaoLogin /></Route>
        <Route exact path="/signup"><Containers.NavigationBar /><Containers.SignUp /><Containers.FooterBar /></Route>
        <Route exact path="/userlist"><Containers.NavigationBar /><Containers.UserList /><Containers.FooterBar /></Route>
        <Route exact path="/projectlist"><Containers.NavigationBar /><Containers.ProjectList /><Containers.FooterBar /></Route>
        <Route exact path="/projectcreate"><Containers.NavigationBar /><Containers.ProjectCreate /><Containers.FooterBar /></Route>
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
