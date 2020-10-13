import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import Login from "../../components/Login";
import Dashboard from "../../components/Dashboard";
import sessionsList from "../sessionsList";
import Temp from "../../components/Temp";
import RequestAccess from "../RequestAcess";
import Organization from "../../components/Organization";
import ForgotPassword from "../../components/Forgotpassword";
import PasswordEmail from "../../components/PasswordEmail";
import RequestEmail from "../../components/RequestEmail";
import SessionCreation from "../../components/sessions/FinalForm";
import ScenarioCreation from "../../components/scenarios/FinalForm";
import { history } from "../../helpers/history";
import PrivateRoute from "../../helpers/privateRoute";
import ErrorBoundary from "../Utilities/ErrorBoundary";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

class RouterApp extends Component {
  render() {
    return (
      <Router history={history}>
        <ErrorBoundary>
          <PrivateRoute exact path="/organizations" component={Organization} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/temp" component={Temp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/request-access" component={RequestAccess} />
          <Route exact path="/request-emailsent" component={RequestEmail} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/forgot-emailsent" component={PasswordEmail} />
          <PrivateRoute exact path="/sessions-list" component={sessionsList} />
          <PrivateRoute
            exact
            path="/create-session"
            component={SessionCreation}
          />
          <PrivateRoute
            exact
            path="/edit-session/:sessionId"
            component={SessionCreation}
          />

          <PrivateRoute
            exact
            path="/create-scenario/:sessionId"
            component={ScenarioCreation}
          />
        </ErrorBoundary>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    );
  }
}

export default RouterApp;
