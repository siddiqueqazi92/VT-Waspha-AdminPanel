import React from "react";
import { Route } from "react-router-dom";

import { EditExpiryMinutes } from "./components/Categories/editExpiryMinutes";

export default [
  <Route
    exact
    path="/categories/edit-timeouts"
    component={EditExpiryMinutes}
  />,
];
