import React, { useState, useEffect } from "react";
import { Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";
import Axios from "axios";
import { getToken, removeUserSession, setUserSession } from "../Utils/Common";
import Customers from "./Customers";
import addCustomers from "./AddCustomer";

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
    <div className="content">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/Customers" component={Customers} />
        <PrivateRoute exact path="/addCustomers" component={addCustomers} />
        <PublicRoute path="/login" component={Login} />
      </Switch>
    </div>
  );
}
export default App;
