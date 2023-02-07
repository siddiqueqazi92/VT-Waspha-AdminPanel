import * as React from "react";
import { Link, FieldProps } from "react-admin";

import { RESOURCES } from "../../../constants";
import FullNameField from "./FullNameField";

const UserLinkField = (props) => {
  let resource = props.resource;
  let id = props.record.id;
  switch (resource) {
    case RESOURCES.WALLETS: {
      resource = RESOURCES.USERS;
      break;
    }
    case RESOURCES.RFPS: {
      resource = RESOURCES.USERS;
      id = props.record.user.id;
      break;
    }
  }
  return props.record ? (
    // <Link to={`/${resource}/${id}/show`}>
    <Link>
      <FullNameField {...props} />
    </Link>
  ) : null;
};

export default UserLinkField;
