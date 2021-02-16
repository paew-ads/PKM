import React, { useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthApi from "../Utils/AuthApi";
import SignIn from "../page/SignIn";
import Home from "../page/Home";
import Customers from "../page/Customers";
import addCustomers from "../page/AddCustomer";
import masterData from "../Components/MasterData";
import addProduct from "../Components/AddProduct";
import tax from "../Components/TaxInvoice";
import addTax from "../Components/AddTax";

function Routes() {
  const authApi = useContext(AuthApi);

  return (
    <Switch>
      <RoutePublic
        exact
        path="/signin"
        component={SignIn}
        auth={authApi.auth}
      />
      <RoutePrivate exact path="/" component={Home} auth={authApi.auth} />
      <RoutePrivate
        exact
        path="/Customers"
        component={Customers}
        auth={authApi.auth}
      />
      <RoutePrivate
        exact
        path="/addCustomers"
        component={addCustomers}
        auth={authApi.auth}
      />
      <RoutePrivate
        exact
        path="/masterData"
        component={masterData}
        auth={authApi.auth}
      />
      <RoutePrivate
        exact
        path="/addProduct"
        component={addProduct}
        auth={authApi.auth}
      />
      <RoutePrivate exact path="/tax" component={tax} auth={authApi.auth} />
      <RoutePrivate
        exact
        path="/addTax"
        component={addTax}
        auth={authApi.auth}
      />
    </Switch>
  );
}

const RoutePublic = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const RoutePrivate = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default Routes;
