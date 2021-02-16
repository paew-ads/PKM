import React, { useContext, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignIn from "../page/SignIn";
import Home from "../page/Home";
import Customers from "../page/Customers";
import addCustomers from "../page/AddCustomer";
import masterData from "../Components/MasterData";
import addProduct from "../Components/AddProduct";
import tax from "../Components/TaxInvoice";
import addTax from "../Components/AddTax";
import useToken from "../Utils/useToken";

function Routes() {
  const { token, setToken } = useToken();

  if (!token) {
    return <SignIn setToken={setToken} />;
  }

  return (
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Customers" component={Customers} />
      <Route exact path="/addCustomers" component={addCustomers} />
      <Route exact path="/masterData" component={masterData} />
      <Route exact path="/addProduct" component={addProduct} />
      <Route exact path="/tax" component={tax} />
      <Route exact path="/addTax" component={addTax} />
    </Switch>
  );
}

// const RoutePublic = ({ auth, component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !auth ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );
// };

// const RoutePrivate = ({ auth, component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         auth ? <Component {...props} /> : <Redirect to="/signin" />
//       }
//     />
//   );
// };

export default Routes;
