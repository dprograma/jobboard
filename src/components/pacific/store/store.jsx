import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeReducer from "../reducers/homeReducer";
import userReducer from "../reducers/authReducer";
import profileReducer from "../reducers/profileReducer";

const rootReducer = combineReducers({user: userReducer, myhome: homeReducer, profile:profileReducer });

const userStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default userStore;
