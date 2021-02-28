import React from "react";
import { Switch } from "react-router-dom";
import SignIn from "../page/SignIn";
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
import DocEdit from "../page/DocEdit";
import DocIn from "../page/DocIn";
import DocOut from "../page/DocOut";
import Users from "../page/Users";
import AddUses from "../page/AddUses";

function Routes() {
  return (
    <Switch>
      <PublicRoute exact path="/signin" component={SignIn} />
      <PrivateRoute exact path="/" component={DocIn} />
      <PrivateRoute exact path="/doc_out" component={DocOut} />
      <PrivateRoute exact path="/Customers" component={Customers} />
      <PrivateRoute exact path="/addCustomers" component={addCustomers} />
      <PrivateRoute exact path="/masterData" component={masterData} />
      <PrivateRoute exact path="/addProduct" component={addProduct} />
      <PrivateRoute exact path="/tax" component={tax} />
      <PrivateRoute exact path="/addTax" component={addTax} />
      <PrivateRoute exact path="/doc_form" component={DocForm} />
      <PrivateRoute exact path="/doc_detial" component={DocDetial} />
      <PrivateRoute exact path="/doc_edit" component={DocEdit} />
      <PrivateRoute exact path="/Users" component={Users} />
      <PrivateRoute exact path="/AddUses" component={AddUses} />
    </Switch>
  );
}

export default Routes;
