import React from "react";
import { Switch } from "react-router-dom";
import SignIn from "../page/SignIn";
import Customers from "../page/Customers";
import addCustomers from "../page/AddCustomer";
import tax from "../Components/TaxInvoice";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";
import DocForm from "../page/DocForm";
import DocDetial from "../page/DocDetial";
import DocEdit from "../page/DocEdit";
import DocIn from "../page/DocIn";
import DocOut from "../page/DocOut";
import Users from "../page/Users";
import AddUses from "../page/AddUses";
import EditUses from "../page/EditUses";
import MyUsers from "../page/MyUsers";

function Routes() {
  return (
    <Switch>
      <PublicRoute exact path="/signin" component={SignIn} />
      <PrivateRoute exact path="/" component={DocIn} />
      <PrivateRoute exact path="/doc_out" component={DocOut} />
      <PrivateRoute exact path="/Customers" component={Customers} />
      <PrivateRoute exact path="/addCustomers" component={addCustomers} />
      <PrivateRoute exact path="/tax" component={tax} />
      <PrivateRoute exact path="/doc_form" component={DocForm} />
      <PrivateRoute exact path="/doc_detial" component={DocDetial} />
      <PrivateRoute exact path="/doc_edit" component={DocEdit} />
      <PrivateRoute exact path="/Users" component={Users} />
      <PrivateRoute exact path="/AddUses" component={AddUses} />
      <PrivateRoute exact path="/EditUses" component={EditUses} />
      <PrivateRoute exact path="/MyUsers" component={MyUsers} />
    </Switch>
  );
}

export default Routes;
