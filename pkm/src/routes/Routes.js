import React from "react";
import { Switch } from "react-router-dom";
import SignIn from "../page/SignIn";
import Home from "../page/Home";
import Customers from "../page/Customers";
import addCustomers from "../page/AddCustomer";
import masterData from "../Components/MasterData";
import addProduct from "../Components/AddProduct";
import tax from "../Components/TaxInvoice";
import addTax from "../Components/AddTax";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";
import DocForm from "../page/DocForm";
import DocDetial from "../page/DocDetial";

function Routes() {
  return (
    <Switch>
      <PublicRoute exact path="/signin" component={SignIn} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/Customers" component={Customers} />
      <PrivateRoute exact path="/addCustomers" component={addCustomers} />
      <PrivateRoute exact path="/masterData" component={masterData} />
      <PrivateRoute exact path="/addProduct" component={addProduct} />
      <PrivateRoute exact path="/tax" component={tax} />
      <PrivateRoute exact path="/addTax" component={addTax} />
      <PrivateRoute exact path="/doc_form" component={DocForm} />
      <PrivateRoute exact path="/doc_detial" component={DocDetial} />
    </Switch>
  );
}

export default Routes;
