import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import reducer from "../reducer/reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default createStore(reducer,applyMiddleware(ReduxThunk));
