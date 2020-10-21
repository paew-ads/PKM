import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router,Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";
import Axios from "axios";
import { getToken, removeUserSession, setUserSession } from "../Utils/Common";

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    Axios.get(`http://localhost:3001/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <Router>
      <div className="content">
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
const { bool } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired,
};

const mapState = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated,
});

export default connect(mapState)(App);
