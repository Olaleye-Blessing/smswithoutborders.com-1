import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import "rsuite/dist/styles/rsuite-default.css";
import "tailwindcss/dist/base.css";
import Login from "content/Login";
import SignUp from "content/SignUp"
import HomePage from 'content/HomePage';
import DashBoard from "content/DashBoard";
import PrivacyPage from 'content/PrivacyPage';
import { getLocalState, setLocalState, clearLocalState } from "services/storage.service";

import { removeToken } from "services/auth.service";
import { removeProfile } from "services/profile.service";

const AppContext = React.createContext();
export const useAppContext = () => React.useContext(AppContext);

const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        id: action.payload.id,
        token: action.payload
      }
    }
    case "SETUSERDATA": {
      return {
        ...state,
        userData: action.payload
      }
    }
    case "LOGOUT": {
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        userData: action.payload.userData
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
};


let localState = getLocalState();
let initialState = localState || {
  id: "",
  token: "",
  userData: {}
}


const App = () => {

  const [state, dispatch] = useReducer(Reducer, initialState);

  const { token, userData } = state;

  useEffect(() => {
    setLocalState(state);
    initialState = getLocalState();
  }, [state])


  const handleLogOut = () => {
    //remove user token from session storage
    removeToken();
    removeProfile();
    clearLocalState();
    // return user to login
    window.location.replace("/")
  }

  return (
    <AppContext.Provider
      value={{
        userData,
        dispatch,
        handleLogOut
      }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/privacy-policy">
            <PrivacyPage />
          </Route>

          <Route path="/dashboard">
            {token ? <DashBoard /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login">
            {token ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};


export default App;
